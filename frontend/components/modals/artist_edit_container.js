import { connect } from 'react-redux';
import { updateArtist } from '../../actions/artist_actions';
import { hideModal } from '../../actions/modal_actions';
import ArtistEdit from './artist_edit';

const mapStateToProps = ({ session, ui }) => ({
  currentArtist: session.currentArtist,
  saving: ui.loading.saving
});

const mapDispatchToProps = dispatch => ({
  updateArtist: (formData, artistId) => dispatch(updateArtist(formData, artistId)),
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistEdit);
