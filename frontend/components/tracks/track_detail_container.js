import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestTrack } from '../../actions/track_actions.js';
import { play } from '../../actions/audio_actions.js';
import TrackDetail from './track_detail';

const mapStateToProps = ({ entities }, { match }) => {
  return {
    track: entities.tracks[match.params.trackId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTrack: trackId => dispatch(requestTrack(trackId)),
  play: track => dispatch(play(track))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail));
