import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';


const HomeRoute = (props) =>{
  const { topics, photos, handleTopicClick, onPhotoItemClick, selectFavourite, favouritedPhotos} = props;
  return (
  <div className="home-route">
    <TopNavigation 
      topics={topics} 
      favouritedPhotos = {favouritedPhotos}
      handleTopicClick={handleTopicClick}
      />
    <PhotoList 
      photos={photos} 
      favouritedPhotos = {favouritedPhotos} 
      onPhotoItemClick={onPhotoItemClick}
      selectFavourite={selectFavourite}
      />
  </div>

  )};
  export default HomeRoute;