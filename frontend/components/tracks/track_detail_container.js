import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestTrack } from '../../actions/track_actions.js';
import { play, pause } from '../../actions/audio_actions.js';
import TrackDetail from './track_detail';

const mapStateToProps = ({ entities, ui }, { match }) => {
  const playing = parseInt(match.params.trackId) === ui.audio.trackId;
    // (parseInt(match.params.trackId) === ui.audio.trackId) &&
    // (!ui.audio.paused);
  return {
    track: entities.tracks[match.params.trackId],
    playing
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTrack: trackId => dispatch(requestTrack(trackId)),
  pause: (track) => dispatch(pause(track)),
  play: track => dispatch(play(track))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail));
