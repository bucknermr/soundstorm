import { connect } from 'react-redux';
import { tracksArray } from '../../reducers/selectors';
import TrackIndex from './track_index';
import { requestTracksByArtist } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  tracks: tracksArray(state),
  artists: state.entities.artists
});

const mapDispatchToProps = (dispatch) => {

  const getTracks = (artistId) => dispatch(requestTracksByArtist(artistId));

  return { getTracks };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
