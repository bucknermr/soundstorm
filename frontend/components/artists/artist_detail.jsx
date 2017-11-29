import React from 'react';
import ArtistSidebar from './artist_sidebar';
import TrackIndexContainer from '../tracks/track_index_container';

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
    const { ownPage, artist, showModal } = this.props;
    if (ownPage) {
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
    const artistId = this.props.match.params.artistId;
    return (
      <div>
        <header className="artist-hero-container">
          {
            imageUrl ? (<img src={imageUrl}/>) : null
          }

          <h3 className="artist-name">{name}</h3>
        </header>
        <section className="artist-detail-content-container">
          <div className="artist-buttons-container">
            {this.renderButtons()}
          </div>
          <div className="artist-main">
          <TrackIndexContainer artistId={artistId} />
          <ArtistSidebar artist={this.state.artist} />
        </div>
      </section>
      </div>
    );
  }
}


export default ArtistDetail;
