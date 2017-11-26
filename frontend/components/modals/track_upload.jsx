import React from 'react';
import ModalBackgroundContainer from './modal_background_container';
import Errors from './errors';
import UpdateImage from '../buttons/update_image';

class TrackUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      audioFile: '',
      audioFileName: '',
      imageFile: '',
      imageUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAudioChange = this.handleAudioChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, description, audioFile, imageFile } = this.state;
    const formData = new FormData();

    formData.append("track[title]", title);
    formData.append("track[description]", description);
    formData.append("track[audio]", audioFile);
    formData.append("track[image]", imageFile);

    this.props.createTrack(formData)
      .then(() => this.props.hideModal());
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleAudioChange(e) {
    const file = e.target.files[0];
    if (file) {
      this.setState({ audioFile: file, audioFileName: file.name });
    }
  }

  handleImageChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  renderImage() {
    if (this.state.imageUrl) {
      return (
        <div className="image-placeholder track-image-container">
          <img src={this.state.imageUrl} className="track-image" />
          <UpdateImage handleImageChange={this.handleImageChange} />
        </div>
      );
    } else {
      return (
        <div className="image-placeholder">
          <UpdateImage handleImageChange={this.handleImageChange} />
        </div>
      );
    }
  }

  render() {
    const { title, description, audioFileName } = this.state;

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
              onChange={this.handleAudioChange}
            />
          </label>
          <p className="audio-file-name" >{audioFileName}</p>
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

          {this.renderImage()}

          <div className="submit-container">
            <p><span>*</span>Required fields</p>
            <div>
              <a onClick={this.props.hideModal}>Cancel</a>
              <button type="submit" className="orange-button">Save</button>
            </div>
          </div>

          <Errors className="upload-errors" errors={this.props.errors} />

        </form>
    );
  }
}


export default TrackUpload;
