import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

export const PhotoDetailsModal = (props) => {
  const {photo, onClose,favouritedPhotos,selectFavourite, onPhotoItemClick} = props;

  return (
  <div className= "photo-details-modal">
    <button className="photo-details-modal__close-button" onClick={onClose}>
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_428_287)">
          <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_428_287">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>

    <div className = "photo-details-modal__images" >
      <PhotoFavButton 
        favouritedPhotos = {favouritedPhotos} 
        photo = {photo}
        selectFavourite={selectFavourite}
      />
      <img  className = "photo-details-modal__image" src={photo.urls.regular} alt={`Photo ${photo.id}`}/>
    </div>
     
      <div className="photo-details-modal__photographer-details">
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
    
    <div className="photo-details-modal__header">
      <h3>Similar Photos</h3>
    </div>
    <div className = "photo-list">
      <PhotoList 
        photos={photo.similar_photos? Object.values(photo.similar_photos):null}
        favouritedPhotos = {favouritedPhotos} 
        selectFavourite={selectFavourite}
        onPhotoItemClick={onPhotoItemClick}/>
    </div>

  </div>
  )};

export default PhotoDetailsModal;