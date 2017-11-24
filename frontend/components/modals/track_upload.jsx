import React from 'react';
import ModalBackgroundContainer from './modal_background_container';

class TrackUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ file: e.target.value });
  }

  render() {

    const filename = this.state.file ? (
      this.state.file.match(/^.*(\\.+)*\\(.+)\.(.+)$/).slice(-2).join('.')
    ) : null;

    return (
        <form
          className="track-upload-form
          modal-content
          track-upload-modal
          animated slideInDown"

          onSubmit={this.handleSubmit}
          >

          <h2>Upload to SoundCloud</h2>
          <label
            htmlFor="file-input"
            className="orange-button file-upload-button" >
            Choose a file to upload
          </label>
          <input id="file-input"
            type="file"
            accept="audio/*"
            onChange={this.handleChange} />
          <p className="audio-file-name" >{filename}</p>
        </form>
    );
  }
}


export default TrackUpload;
