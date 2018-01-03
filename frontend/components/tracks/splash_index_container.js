import { connect } from 'react-redux';
import { requestTracksByPlayCount } from '../../actions/track_actions';
import { tracksArray } from '../../reducers/selectors';
import SplashIndex from './splash_index';

const mapStateToProps = (state) => ({
  artists: state.entities.artists,
  tracks: tracksArray(state),
  loading: state.ui.loading.trackIndex
});

const mapDispatchToProps = dispatch => ({
  getTopTracks: () => dispatch(requestTracksByPlayCount(12)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashIndex);
