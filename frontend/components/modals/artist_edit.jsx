import React from 'react';
import UpdateImage from '../buttons/update_image';

class ArtistEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentArtist;

    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value });
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
    const { name, bio, imageFile } = this.state;
    const formData = new FormData();

    formData.append("artist[name]", name);
    formData.append("artist[bio]", bio);
    if (imageFile) {
      formData.append("artist[image]", imageFile);
    }

    this.props.updateArtist(formData, this.props.currentArtist.id)
      .then(() => this.props.hideModal());
  }



  render () {
    const { name, bio, imageUrl } = this.state;

    return (
      <form
        className="
        artist-edit-modal
        animated slideInDown"
        onSubmit={this.handleSubmit}
        >

        <h2>Edit your Profile</h2>
        <div className="artist-edit-content-container" >
          <div className="image-placeholder">
            <img src={imageUrl}></img>
            <UpdateImage handleImageChange={this.handleImageChange} />
          </div>

          <div className="artist-edit-input-fields-container">
            <label className="name">Display name<span>*</span>
            <input
              type="text"
              value={name}
              onChange={this.handleChange('name')}
            />
          </label>
          <label className="bio">Bio
            <textarea
              value={bio}
              placeholder="Tell the world a little bit about yourself.
              The shorter the better."
              onChange={this.handleChange('bio')}
            />
          </label>
          </div>
        </div>

        <div className="submit-container">
          <p><span>*</span>Required fields</p>
          <div>
            <a onClick={this.props.hideModal}>Cancel</a>
            <button type="submit" className="orange-button">Save</button>
          </div>
        </div>

        {/* <Errors className="upload-errors" errors={this.props.errors} /> */}

      </form>
    );
  }
}

export default ArtistEdit;
