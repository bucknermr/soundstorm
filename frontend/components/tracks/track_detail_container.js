import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestTrack } from '../../actions/track_actions.js';
import { play, pause } from '../../actions/audio_actions.js';
import TrackDetail from './track_detail';

const mapStateToProps = ({ entities, ui, session }, { match }) => {
  const playing = parseInt(match.params.trackId) === ui.audio.trackId;
  return {
    track: entities.tracks[match.params.trackId],
    artists: entities.artists,
    currentArtist: session.currentArtist,
    playing
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTrack: trackId => dispatch(requestTrack(trackId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail));
