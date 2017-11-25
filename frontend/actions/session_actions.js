import * as SessionApiUtil from '../util/session_api_util';
import { Redirect } from 'react-router';

// Constants

export const RECEIVE_CURRENT_ARTIST = 'RECEIVE_CURRENT_ARTIST';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

// Action Creators

export const receiveCurrentArtist = artist => ({
  type: RECEIVE_CURRENT_ARTIST,
  artist
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});


// Thunk Action Creators

export const signup = artist => dispatch => (
  SessionApiUtil.signup(artist)
    .then(
      newArtist => dispatch(receiveCurrentArtist(newArtist)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const login = artist => dispatch => (
  SessionApiUtil.login(artist)
    .then(
      currentArtist => dispatch(receiveCurrentArtist(currentArtist)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(
      artist => dispatch(receiveCurrentArtist(null)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);
