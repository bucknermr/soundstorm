import { connect } from 'react-redux';
import { createTrack, updateTrack } from '../../actions/track_actions';
import { hideModal } from '../../actions/modal_actions';
import TrackForm from './track_form';

const mapStateToProps = ({ errors }, { formType }) => ({
  errors: errors.track,
  formType
});

const mapDispatchToProps = (dispatch, { formType }) => {
  return {
    createTrack: track => dispatch(createTrack(track)),
    updateTrack: (formData, trackId) => dispatch(updateTrack(formData, trackId)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
