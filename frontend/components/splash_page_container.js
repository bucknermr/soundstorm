import { connect } from 'react-redux';
import { showModal } from '../actions/modal_actions';
import SplashPage from './splash_page';

const mapDispatchToProps = dispatch => ({
  showSignup: () => dispatch(showModal('signup', "Please Sign Up to upload music!"))
});

export default connect(
  null,
  mapDispatchToProps
)(SplashPage)
