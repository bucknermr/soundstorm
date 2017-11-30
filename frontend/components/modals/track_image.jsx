import React from 'react';
import UpdateImage from '../buttons/update_image';

const TrackImage = ({ imageUrl, handleImageChange }) => {
  if (imageUrl) {
    return (
      <div className="image-placeholder track-image-container">
        <img src={imageUrl} className="track-image" />
        <UpdateImage handleImageChange={handleImageChange} />
      </div>
    );
  } else {
    return (
      <div className="image-placeholder">
        <UpdateImage handleImageChange={handleImageChange} />
      </div>
    );
  }
};

export default TrackImage;
