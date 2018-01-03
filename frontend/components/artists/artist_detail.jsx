import React from 'react';
import ArtistSidebar from './artist_sidebar';
import TrackIndexContainer from '../tracks/track_index_container';

class ArtistDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: !this.props.artist };
  }

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(newProps) {
    const currentArtist = this.props.artist;
    const artistId = Number(newProps.match.params.artistId);
    if (!currentArtist || currentArtist.id !== artistId) {
      this.props.requestArtist(artistId);
    } else if (newProps.loading !== this.state.loading) {
      this.setState({ loading: newProps.loading })
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
    if (this.state.loading) {
      return (
        <div>
          <header className="artist-hero-container"></header>
          <section className="artist-content-container">
            <div className="artist-buttons-container"></div>
            <div className="content-main">
              <TrackIndexContainer />
            </div>
          </section>
        </div>
      )
    }
    const { name, imageUrl } = this.props.artist;
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
            <TrackIndexContainer />
            <ArtistSidebar artist={this.props.artist} />
          </div>
        </section>
      </div>
    );
  }
}


export default ArtistDetail;
