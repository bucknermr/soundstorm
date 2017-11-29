import { connect } from 'react-redux';
import { tracksArray, combineArtistsWithDetail } from '../../reducers/selectors';
import TrackIndex from './track_index';
import { requestTracksByArtist } from '../../actions/track_actions';

const mapStateToProps = (state, { artistId }) => ({
  tracks: tracksArray(state),
  artists: combineArtistsWithDetail(state),
  artistId
});

const mapDispatchToProps = (dispatch) => {

  const getTracks = (artistId) => dispatch(requestTracksByArtist(artistId));

  return { getTracks };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
