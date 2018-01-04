import React from 'react';

import TrackImage from './track_image';
import Errors from './errors';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === 'track-edit') {
      const { title, description, imageUrl } = this.props.track;
      this.state = { title, description, imageUrl };
    } else {
      this.state = {
        title: '',
        description: '',
        audioFile: '',
        audioFileName: '',
        imageFile: '',
        imageUrl: ''
      };
    }

      this.handleChange = this.handleChange.bind(this);
      this.handleAudioChange = this.handleAudioChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const { title, description, audioFile, imageFile } = this.state;
    const { createTrack, updateTrack, formType, track, hideModal } = this.props;
    const formData = new FormData();

    formData.append("track[title]", title);
    formData.append("track[description]", description);
    if (imageFile) {
      formData.append("track[image]", imageFile);
    }
    if (formType === 'track-upload') {
      formData.append("track[audio]", audioFile);
      createTrack(formData).then(() => hideModal());
    } else {
      updateTrack(formData, track.id).then(() => hideModal());
    }
  }

  header() {
    const headerContent = this.props.formType === 'track-upload' ? (
      "Upload to Soundcloud" ) : ( "Edit your track" );
    return (<h2>{headerContent}</h2>);
  }

  audioUpload() {
    return (
      <div>
        <label
          className="orange-button file-upload-button" >
          Choose a file to upload
          <input
            type="file"
            accept="audio/*"
            onChange={this.handleAudioChange}
          />
        </label>
        <p className="audio-file-name" >{this.state.audioFileName}</p>
      </div>
    );
  }

  render() {
    const { title, description, audioFileName, imageUrl } = this.state;
    const { formType, errors } = this.props;

    return (
        <form
          className="
          track-form-modal
          animated slideInDown"
          onSubmit={this.handleSubmit}
          >

          {this.header()}
          { formType === 'track-upload' ? this.audioUpload() : null }

          <div className="track-input-fields-container" >
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

          <TrackImage imageUrl={imageUrl}
            handleImageChange={this.handleImageChange}
          />

          <div className="submit-container">
            <p><span>*</span>Required fields</p>
            <div>
              <a onClick={this.props.hideModal}>Cancel</a>
              {this.props.saving ? (
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw loading"></i>
              ) : null}
              <button type="submit" className="orange-button">
                { formType === 'track-upload' ? "Save" : "Save changes" }
              </button>
            </div>
          </div>

          <Errors className="track-errors" errors={errors} />

        </form>
    );
  }
}

export default TrackForm;
