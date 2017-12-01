import { connect } from 'react-redux';
import { play, pause } from '../../actions/audio_actions.js';
import PlayPause from './play_pause';

const mapStateToProps = ({ ui }) => ({
  playingId: ui.audio.trackId
});


const mapDispatchToProps = (dispatch) => ({
  pause: track => dispatch(pause(track)),
  play: track => dispatch(play(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayPause);
