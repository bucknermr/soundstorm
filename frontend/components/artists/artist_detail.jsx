import React from 'react';
import ArtistSidebar from './artist_sidebar';

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
        <div className="artist-buttons">
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
          {
            imageUrl ? (<img src={imageUrl}/>) : null
          }

          <h3 className="artist-name">{name}</h3>
          <section className="artist-detail-content-container">
            <div className="artist-buttons-container">
              {this.renderButtons()}
            </div>
            <div className="artist-main">
              <div className="artist-track-index"></div>
              <ArtistSidebar artist={this.state.artist} />
            </div>
          </section>
        </header>
      </div>
    );
  }
}


export default ArtistDetail;
