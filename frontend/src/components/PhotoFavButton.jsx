import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import FavBadge from "./FavBadge";
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {photo, favouritedPhotos, selectFavourite} = props;

  const handleFavoriteToggle = () => {
    selectFavourite(photo.id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavoriteToggle}>
      { favouritedPhotos[photo.id] ? (
        <FavBadge className="photo-list__fav-icon-svg"/>
      ):(
        <FavIcon className="photo-list__fav-icon-svg"/>
      )}     
    </div>
  );
}

export default PhotoFavButton;