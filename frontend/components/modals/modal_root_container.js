import { connect } from 'react-redux';
import ModalRoot from './modal_root';
import { hideModal } from '../../actions/modal_actions';

const mapStateToProps = ({ ui }) => ({
  modalType: ui.modal.modalType,
  content: ui.modal.content
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  null
)(ModalRoot);
