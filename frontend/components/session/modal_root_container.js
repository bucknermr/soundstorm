import { connect } from 'react-redux';
import ModalRoot from './modal_root';

const mapStateToProps = ({ ui }) => ({
  modalType: ui.modal.modalType
});

export default connect(
  mapStateToProps,
  null
)(ModalRoot);
