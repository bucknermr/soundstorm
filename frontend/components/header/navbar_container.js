import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { showModal } from '../../actions/modal_actions';
import NavBar from './navbar';

import NavbarLoggedIn from './navbar_logged_in';
import NavbarLoggedOut from './navbar_logged_out';

const mapStateToProps = ({ session }) => ({
  currentArtist: session.currentArtist
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  signinForm: () => dispatch(showModal('signin')),
  signupForm: () => dispatch(showModal('signup')),
  trackUploadForm: () => dispatch(showModal('track-upload'))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
