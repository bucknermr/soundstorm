import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router';
import { showModal } from '../actions/modal_actions';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route
    path={path}
    render={ (props) =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route
    path={path}
    render={ (props) =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        showModal('signin')
      )
    }
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  showModal: (modalType) => dispatch(showModal(modalType))
});

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth)
);
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Auth)
);
