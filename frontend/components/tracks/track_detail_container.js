import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestTrack, playTrack } from '../../actions/track_actions.js';
import TrackDetail from './track_detail';

const mapStateToProps = ({ entities }, { match }) => {
  return {
    track: entities.tracks[match.params.trackId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTrack: trackId => dispatch(requestTrack(trackId)),
  playTrack: track => dispatch(playTrack(track))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail));
