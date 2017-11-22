import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentArtist: session.currentArtist
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
