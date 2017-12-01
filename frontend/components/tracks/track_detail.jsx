import React from 'react';
import { Link } from 'react-router-dom';
import WaveformContainer from '../audio/waveform_container';
import PlayPauseContainer from '../buttons/play_pause_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
import TrackButtonsContainer from '../buttons/track_buttons_container';
import InlineTrackStats from './inline_track_stats';

class TrackDetail extends React.Component {

  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId);
  }

  componentWillReceiveProps({ track, match }) {
    if (!track) {
      this.props.requestTrack(match.params.trackId);
    }
  }

  render () {

    const { track, artists, trackEditForm, currentArtist } = this.props;

    if (!track) { return null; }

    const trackArtist = artists[track.artistId];
    let linkName = trackArtist.name;
    if (linkName.length > 16) {
      linkName = linkName.slice(0, 13) + '...';
    }

    return (
      <div>
        <div className="track-hero-container">
          <PlayPauseContainer track={track} />

          <Link className="artist-name" to={`/artists/${track.artistId}`}>
            {trackArtist.name}
          </Link>
          <h2 className="track-title">{track.title}</h2>

          <WaveformContainer
            audioUrl={track.audioUrl}
            trackId={track.id}
            height={100}
            barHeight={1.5}
            progressColor={'#fa5503'}
            waveColor={'#fff'}
          />

          <img src={track.imageUrl} />

        </div>
        <section className="track-content-container">
          <CommentFormContainer trackId={track.id} />
          <div>
            {
              currentArtist && currentArtist.id === trackArtist.id ? (
                <TrackButtonsContainer track={track} />
              ) : null
            }
            <InlineTrackStats track={track} />
          </div>
          <div className="content-main">

            <div className="artist-info">
              <Link to={`/artists/${trackArtist.id}`}>
                <img className="artist-image" src={trackArtist.imageUrl} />
              </Link>
              <Link to={`/artists/${trackArtist.id}`}
                className="artist-link-name"
              >
                {linkName}
              </Link>
            </div>

            <div className="track-content-wrapper">
              <p className="track-description">{track.description}</p>
              <CommentIndexContainer trackArtistId={trackArtist.id}/>
            </div>

            <div className="sidebar-right">
            </div>

          </div>
        </section>


      </div>
    );
  }
}

export default TrackDetail;
