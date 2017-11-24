import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import ModalBackground from './modal_background';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(null, mapDispatchToProps)(ModalBackground);
