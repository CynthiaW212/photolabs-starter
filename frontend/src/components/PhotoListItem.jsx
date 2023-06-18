
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo,favouritedPhotos, onClick, selectFavourite} = props;
  return (
    <div className = "photo-list__item" >
      <PhotoFavButton 
        favouritedPhotos = {favouritedPhotos} 
        photo = {photo}
        selectFavourite={selectFavourite}
        />
      <img className = "photo-list__image" src={photo.urls.regular} alt={`Photo ${photo.id}`} onClick={onClick}/>

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt={`Profile of ${photo.user.username}`}
        />

        <div className="photo-list__user-info">
          {photo.user.username}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
     
    </div>
  );

};

export default PhotoListItem;