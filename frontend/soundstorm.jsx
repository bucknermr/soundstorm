import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

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
});
