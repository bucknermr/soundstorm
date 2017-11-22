import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  return {
    currentArtist: session.currentArtist
  };
};

const mapDispatchToProps = (dispatch) => {

  let submitAction = login;

  return {
    submitAction: artist => dispatch(login(artist))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm)
);
