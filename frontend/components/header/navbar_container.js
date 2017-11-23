import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { showModal } from '../../actions/modal_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentArtist: session.currentArtist
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  signinForm: () => dispatch(showModal('signin')),
  signupForm: () => dispatch(showModal('signup'))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
