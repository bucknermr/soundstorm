import React from 'react';
import ModalBackgroundContainer from './modal_background_container';

class TrackUpload extends React.Component {
  render() {
    return (
      <div className="modal-content track-upload-modal animated slideInDown">
        <h2>Upload to SoundCloud</h2>
        <form className="track-upload-form">
          <label
            htmlFor="file-input"
            className="orange-button file-upload-button" >
            Choose a file to upload
          </label>
          <input id="file-input" type="file" />
        </form>
      </div>
    );
  }
}


export default TrackUpload;
