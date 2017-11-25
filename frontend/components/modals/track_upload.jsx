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
    const { title, description, file } = this.state;
    const formData = new FormData();
    formData.append("track[title]", title);
    formData.append("track[description]", description);
    formData.append("track[audio]", file);
    console.log(formData);
    this.props.createTrack(formData);
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
          className="
          track-upload-modal
          animated slideInDown"
          onSubmit={this.handleSubmit}
          >

          <h2>Upload to SoundCloud</h2>
          <label
            className="orange-button file-upload-button" >
            Choose a file to upload
            <input
              type="file"
              accept="audio/*"
              onChange={this.handleFileChange}
            />
          </label>
          <p className="audio-file-name" >{filename}</p>
          <div className="upload-input-fields-container" >
            <label className="title">Title<span>*</span>
              <input
                type="text"
                value={title}
                placeholder="Name your track"
                onChange={this.handleChange('title')}
              />
            </label>
            <label className="description">Description
              <textarea
                value={description}
                placeholder="Describe your track"
                onChange={this.handleChange('description')}
              />
            </label>
          </div>
          <div className="image-placeholder">
            <button>
              <i class="fa fa-camera" aria-hidden="true"></i>Update Image
            </button>
          </div>
          <div className="submit-container">
            <p><span>*</span>Required fields</p>
            <div>
              <a onClick={this.props.hideModal}>Cancel</a>
              <button type="submit" className="orange-button">Save</button>
            </div>
          </div>
        </form>
    );
  }
}


export default TrackUpload;
