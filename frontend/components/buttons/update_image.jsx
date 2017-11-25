import React from 'react';

const UpdateImage = ({ handleImageChange }) => {
  return (
    <label className="update-image-button">
      <i className="fa fa-camera" aria-hidden="true"></i>Update Image
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    </label>
  );
};

export default UpdateImage;
