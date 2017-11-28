import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { singleArtist, tracksArray } from '../../reducers/selectors';
import { requestArtist } from '../../actions/artist_actions';
import { showModal } from '../../actions/modal_actions';
import ArtistDetail from './artist_detail';

const mapStateToProps = (state, { match }) => {
  // debugger;
  return {
    currentArtist: state.session.currentArtist,
    artist: state.entities.artists[match.params.artistId],
    tracks: tracksArray(state)
  };
};
// const mapStateToProps = (state, { match }) => ({
//   currentArtistId: state.session.currentArtist.id,
//   artist: state.entities.artists[match.params.artistId],
//   tracks: tracksArray(state)
// });

const mapDispatchToProps = dispatch => ({
  requestArtist: artistId => dispatch(requestArtist(artistId)),
  showModal: modalType => dispatch(showModal(modalType))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ArtistDetail)
);
