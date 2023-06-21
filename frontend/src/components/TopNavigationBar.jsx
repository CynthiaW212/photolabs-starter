import React from 'react';
import TopicList from './TopicList';
import FavIcon  from './FavIcon';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';


const TopNavigation = (props) => {
  const {topics, favouritedPhotos, handleTopicClick, onSubmit} = props;
  const hasTrueValue = Object.values(favouritedPhotos).includes(true);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topics = {topics}
        handleTopicClick = {handleTopicClick}
        onSubmit = {onSubmit}
      />
      <div className="top-nav-bar__fav-icon">
        <FavBadge isFavPhotoExist = {hasTrueValue}/>
      </div>
    </div>
  )
};

export default TopNavigation;