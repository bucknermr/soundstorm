import React from 'react';
import { Link } from 'react-router-dom';
import WaveformContainer from '../audio/waveform_container';
import PlayPauseContainer from '../buttons/play_pause_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
import TrackButtonsContainer from '../buttons/track_buttons_container';
import InlineTrackStats from './inline_track_stats';

class TrackDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId);
  }

  componentWillReceiveProps({ track, match, loading }) {
    if (match.params.trackId !== this.props.match.params.trackId) {
      this.props.requestTrack(match.params.trackId);
      this.setState({ loading: true })
    } else if (loading !== this.state.loading) {
      this.setState({ loading });
    }
  }

  trackHeroContainer() {
    const { track, trackArtist } = this.props;
    return (
      <div className="track-hero-container">
        {track ? <PlayPauseContainer track={track} /> : null}
        {trackArtist ? (
          <Link className="artist-name" to={`/artists/${trackArtist.id}`}>
          {trackArtist.name}
        </Link>
        ) : null}
        {track ? (
          <div>
            <h2 className="track-title">{track.title}</h2>
            <WaveformContainer
              track={track}
              height={100}
              barHeight={1.5}
              progressColor={'#fa5503'}
              waveColor={'#fff'}
            />
            <img src={track.imageUrl} />
          </div>
        ) : null}
      </div>
    )
  }

  render () {
    const { track, artists, trackEditForm, currentArtist, trackArtist } = this.props;

    if (this.state.loading) {
      return (
        <div>
          {this.trackHeroContainer()}
          <section className="track-content-container">
            <div className="content-main">
              <div className="track-stats-buttons-container"></div>
              <div className="artist-info"></div>
              <div className="track-content-wrapper">
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw loading"></i>
              </div>
              <div className="sidebar-right"></div>
            </div>
          </section>
        </div>
      )
    }

    let linkName = trackArtist.name;
    if (linkName.length > 16) {
      linkName = linkName.slice(0, 13) + '...';
    }

    return (
      <div>
        {this.trackHeroContainer()}
        <section className="track-content-container">
          <CommentFormContainer trackId={track.id} />
          <div className="content-main">
            <div className="track-stats-buttons-container">
              {
                currentArtist && currentArtist.id === trackArtist.id ? (
                  <TrackButtonsContainer track={track} />
                ) : null
              }
              <InlineTrackStats track={track} detail={true} />
            </div>

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
