import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const { state, actions } = useApplicationData();
  const { selectedPhoto, favouritedPhotos } = state;
  const { openModal, closeModal, selectFavourite } = actions;

  const handlePhotoItemClick = (photo) => {
    console.log(photo);
    openModal(photo);
  };

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => { setPhotos(data)})
      .catch((error) => console.error("Error fetching photos:", error));
    }, []);
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => { setTopics(data)})
      .catch((error) => console.error("Error fetching topics:", error));
    }, []);

    const handleTopicClick = (topicId) => {
      if (topicId) {
        fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
          .then((response) => response.json())
          .then((data) => {
            setPhotos(data);
          })
          .catch((error) => {
            console.error(error);
          })
      }
    };

    useEffect(() => {
      handleTopicClick();
    }, []);

  return (
  <div className="App">
    <HomeRoute 
          topics = {topics}
          photos = {photos}
          handleTopicClick={handleTopicClick}
          onPhotoItemClick={handlePhotoItemClick}
          selectFavourite={selectFavourite}
          favouritedPhotos = {favouritedPhotos}
          />
    {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          favouritedPhotos = {favouritedPhotos}
          onPhotoItemClick={handlePhotoItemClick}
          onClose={closeModal}
          selectFavourite={selectFavourite}
        />
      )}
  </div>
)
  };

export default App;