import { connect } from 'react-redux';
import { tracksArray } from '../../reducers/selectors';
import TrackIndex from './track_index';
import { requestTracksByArtist } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  tracks: tracksArray(state),
  artists: state.entities.artists,
  loading: state.ui.loading.trackIndex
});

export default connect(
  mapStateToProps,
  null
)(TrackIndex);
