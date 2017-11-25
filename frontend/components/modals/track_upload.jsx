import React from 'react';
import ModalBackgroundContainer from './modal_background_container';

class TrackUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      filename: '',
      file: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      this.setState({ file: file, filename: file.name });
    }
  }

  render() {
    const { title, description, filename } = this.state;

    return (
        <form
          className="track-upload-form
          modal-content
          track-upload-modal
          animated slideInDown"
          onSubmit={this.handleSubmit}
          >

          <h2>Upload to SoundCloud</h2>
          <label>Title
            <input
              type="text"
              value={title}
              placeholder="Name your track"
            />
          </label>
          <label>Description
            <textarea
              value={description}
              placeholder="Describe your track"
            />
          </label>
          <label
            className="orange-button file-upload-button" >
            Choose a file to upload
            <input
              type="file"
              accept="audio/*"
              onChange={this.handleFileChange} />
          </label>
          <p className="audio-file-name" >{filename}</p>
        </form>
    );
  }
}


export default TrackUpload;
