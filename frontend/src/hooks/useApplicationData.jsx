import { useReducer,useEffect} from 'react';

const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
const SET_PHOTO_FAVOURITES = 'SET_PHOTO_FAVOURITES';
const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_TOPICS = 'SET_TOPICS';

const initialState = {
  selectedPhoto: null,
  favouritedPhotos: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case SET_PHOTO_FAVOURITES:
      return { ...state, favouritedPhotos: action.payload };
    case TOGGLE_FAVOURITE:
      const { id } = action.payload;
      if (state.favouritedPhotos[id]) {
        return {
          ...state,
          favouritedPhotos: {
            ...state.favouritedPhotos,
            [id]: !state.favouritedPhotos[id]
          }
        };
      }
      return {
        ...state,
        favouritedPhotos: {
          ...state.favouritedPhotos,
          [id]: true
        }
      };
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case SET_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({type:SET_PHOTOS, payload:data});
      })
      .catch((error) => console.error("Error fetching photos:", error));
    }, []);
  
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({type:SET_TOPICS, payload:data});
      })
      .catch((error) => console.error("Error fetching topics:", error));
    }, []);
  
  const handleTopicClick = (topicId) => {
    if (topicId) {
      fetch(`/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then(data => {
          dispatch({type:SET_PHOTOS, payload:data});
        })
       .catch((error) => {
          console.error(error);
        })
    }
  };
  
  useEffect(() => {
      handleTopicClick();
    }, []);

  const openModal = (photo) => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: null });
  };

  const selectFavourite = (id) => {
    dispatch({ type: TOGGLE_FAVOURITE, payload: { id } });
  };

  const setPhotos = () => {
    dispatch({ type: SET_PHOTOS, payload: null });
  };


  return {
    state,
    actions: {
      openModal,
      closeModal,
      selectFavourite,
      handleTopicClick
    }
  };
};

export default useApplicationData;