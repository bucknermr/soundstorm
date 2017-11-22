import { connect } from 'react-redux';
import { showModal } from '../../actions/modal_actions';
import Hero from './hero';

// const mapStateToProps = (state, { modalType }) => {
//   return {
//     formType: modalType
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  showModal: modalType => dispatch(showModal(modalType))
});

export default connect(
  null,
  mapDispatchToProps
)(Hero);
