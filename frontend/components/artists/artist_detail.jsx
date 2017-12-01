import React from 'react';
import ArtistSidebar from './artist_sidebar';
import TrackIndexContainer from '../tracks/track_index_container';

class ArtistDetail extends React.Component {

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(newProps) {
    const currentArtist = this.props.artist;
    const artistId = Number(newProps.match.params.artistId);
    if (!currentArtist || currentArtist.id !== artistId) {
      this.props.requestArtist(artistId);
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
    if (this.props.artist) {
      const { name, bio, imageUrl } = this.props.artist;
      const artistId = Number(this.props.match.params.artistId);
      return (
        <div>
          <header className="artist-hero-container">
            <img src={imageUrl}/>
            <h3 className="artist-name">{name}</h3>
          </header>
          <section className="artist-content-container">
            <div className="artist-buttons-container">
              {this.renderButtons()}
            </div>
            <div className="content-main">
              <TrackIndexContainer artistId={artistId} />
              <ArtistSidebar artist={this.props.artist} />
            </div>
          </section>
        </div>
      );
    } else {
      // TODO: spinner while loading
      return ( <div></div> );
    }

  }
}


export default ArtistDetail;
