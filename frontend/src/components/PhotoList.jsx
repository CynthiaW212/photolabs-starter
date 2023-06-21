import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
  const { photos, favouritedPhotos, onPhotoItemClick,selectFavourite, searchedPhotos } = props;

  return (
    <ul className="photo-list">
      { (Array.isArray(searchedPhotos) && searchedPhotos.length > 0 && searchedPhotos.map((photo) => (
        <PhotoListItem
        key={photo.id}
        photo= {photo}
        favouritedPhotos = {favouritedPhotos}
        onClick={() => onPhotoItemClick(photo)}
        selectFavourite={selectFavourite}
      />
      )) )
      ||
      (Array.isArray(photos) && photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo= {photo}
          favouritedPhotos = {favouritedPhotos}
          onClick={() => onPhotoItemClick(photo)}
          selectFavourite={selectFavourite}
        />
      ))
      )}
    </ul>
  );
}

export default PhotoList;