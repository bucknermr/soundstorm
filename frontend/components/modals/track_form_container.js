import { connect } from 'react-redux';
import { createTrack, updateTrack, clearErrors } from '../../actions/track_actions';
import { hideModal } from '../../actions/modal_actions';
import TrackForm from './track_form';

const mapStateToProps = ({ errors, ui }, { formType }) => ({
  errors: errors.track,
  formType,
  saving: ui.loading.saving
});

const mapDispatchToProps = (dispatch, { formType }) => {
  return {
    createTrack: track => dispatch(createTrack(track)),
    updateTrack: (formData, trackId) => dispatch(updateTrack(formData, trackId)),
    hideModal: () => dispatch(hideModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
