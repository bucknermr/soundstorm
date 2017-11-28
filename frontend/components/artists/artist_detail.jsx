import React from 'react';


class ArtistDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      artist: {
        id: '',
        name: '',
        bio: '',
        imageUrl: ''
      }
    };
  }

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artist) {
      this.setState({
        artist: newProps.artist
      });
    } else {
      this.props.requestArtist(newProps.match.params.artistId);
    }
  }

  renderButtons() {
    const { currentArtist, artist, showModal } = this.props;
    if (currentArtist && currentArtist.id === this.state.artist.id) {
      return (
        <div>
          <button
            className="edit-button"
            onClick={() => showModal('artist-edit')}
          >
            <i className="fa fa-pencil" aria-hidden="true"></i> Edit
          </button>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    const { name, bio, imageUrl } = this.state.artist;

    return (
      <div>
        <header className="artist-hero-container">
          <h3 className="artist-name">{name}</h3>
          {/* <p>{bio}
            This is where the bio would go. This is the biography of a random
            artist. This person is really interesting and good at their job.
            Woohoo.
          </p> */}
          <section className="artist-detail-content-container">
            <div className="artist-buttons-container">
              {this.renderButtons()}
            </div>
            <div className=""></div>
          </section>
          <img src={imageUrl} />
        </header>
      </div>
    );
  }
}


export default ArtistDetail;
