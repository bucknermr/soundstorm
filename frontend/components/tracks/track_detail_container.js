import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestTrack } from '../../actions/track_actions.js';
import { play, pause } from '../../actions/audio_actions.js';
import TrackDetail from './track_detail';

import { showModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, ui }, { match }) => {
  const playing = parseInt(match.params.trackId) === ui.audio.trackId;
  return {
    track: entities.tracks[match.params.trackId],
    artists: entities.artists,
    playing
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTrack: trackId => dispatch(requestTrack(trackId)),
  pause: track => dispatch(pause(track)),
  play: track => dispatch(play(track)),
  trackEditForm: track => dispatch(showModal('track-edit', track))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail));
