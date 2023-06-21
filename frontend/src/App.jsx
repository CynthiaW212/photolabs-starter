import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, actions } = useApplicationData();
  const { selectedPhoto, favouritedPhotos,photos,topics } = state;
  const { openModal, closeModal, selectFavourite,handleTopicClick } = actions;

  const handlePhotoItemClick = (photo) => {
    openModal(photo);
  };

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