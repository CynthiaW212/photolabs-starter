import { useReducer } from 'react';

const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
const SET_PHOTO_FAVOURITES = 'SET_PHOTO_FAVOURITES';
const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

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
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: null });
  };

  const selectFavourite = (id) => {
    dispatch({ type: TOGGLE_FAVOURITE, payload: { id } });
  };

  return {
    state,
    actions: {
      openModal,
      closeModal,
      selectFavourite
    }
  };
};

export default useApplicationData;