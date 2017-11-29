import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { singleArtist, tracksArray } from '../../reducers/selectors';
import { requestArtist } from '../../actions/artist_actions';
import { showModal } from '../../actions/modal_actions';
import ArtistDetail from './artist_detail';

const mapStateToProps = (state, { match }) => {
  const { currentArtist } = state.session;
  const artistId = Number(match.params.artistId);

  const ownPage = currentArtist && (currentArtist.id === artistId);
  const artist = state.entities.artists[artistId];

  return {
    ownPage,
    artist,
    tracks: tracksArray(state)
  };
};

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
