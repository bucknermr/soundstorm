import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';
import { play, pause } from '../../actions/audio_actions.js';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  play: track => dispatch(play(track)),
  pause: track => dispatch(pause(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndexItem);
