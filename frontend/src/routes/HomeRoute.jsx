import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';


const HomeRoute = (props) =>{
  const { topics, photos,searchedPhotos, handleTopicClick, onPhotoItemClick, selectFavourite, favouritedPhotos,onSubmit} = props;
  return (
  <div className="home-route">
    <TopNavigation 
      topics={topics} 
      favouritedPhotos = {favouritedPhotos}
      handleTopicClick={handleTopicClick}
      onSubmit = {onSubmit}
      />
    <PhotoList 
      photos={photos} 
      favouritedPhotos = {favouritedPhotos} 
      onPhotoItemClick={onPhotoItemClick}
      selectFavourite={selectFavourite}
      searchedPhotos = {searchedPhotos}
      />
  </div>

  )};
  export default HomeRoute;