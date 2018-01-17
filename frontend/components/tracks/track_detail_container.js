import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestTrack } from '../../actions/track_actions.js';
import { play, pause } from '../../actions/audio_actions.js';
import TrackDetail from './track_detail';

const mapStateToProps = ({ entities, ui, session }, { match }) => {
  const playing = parseInt(match.params.trackId) === ui.audio.trackId;

  const track = entities.tracks[match.params.trackId];
  const trackArtist = track ? entities.artists[track.artistId] : null;

  return {
    track: entities.tracks[match.params.trackId],
    currentArtist: session.currentArtist,
    playing,
    loading: ui.loading.trackDetail,
    trackArtist
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTrack: trackId => dispatch(requestTrack(trackId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail));
