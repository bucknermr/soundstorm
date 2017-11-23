import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TODO: FOR TESTING
import { signup, login, logout } from './actions/session_actions';
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  let store;

  if (window.currentArtist) {
    const preloadedState = { session: { currentArtist: window.currentArtist }};
    store = configureStore(preloadedState);
    delete window.currentArtist;
  } else {
    store = configureStore();
  }


  ReactDOM.render(<Root store={store} />, rootEl);


  // TODO: FOR TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // TESTING END
});
