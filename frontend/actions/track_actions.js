import * as TracksApiUtil from '../util/tracks_api_util';

// Constants

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'DELETE_TRACK';

export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const CLEAR_TRACK_ERRORS =  'CLEAR_TRACK_ERRORS';

// Action Creators

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const removeTrack = track => ({
  type: REMOVE_TRACK,
  trackId: track.id
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_TRACK_ERRORS
});

// Thunk Action Creators

export const createTrack = formData => dispatch => (
  TracksApiUtil.createTrack(formData)
    .then(
      track => dispatch(receiveTrack(track)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const requestTracks = () => dispatch => (
  TracksApiUtil.fetchTracks()
    .then(
      tracks => dispatch(receiveTracks(tracks)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const requestTrack = trackId => dispatch => (
  TracksApiUtil.fetchTrack(trackId)
    .then(
      track => dispatch(receiveTrack(track)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const updateTrack = track => dispatch => (
  TracksApiUtil.updateTrack(track)
    .then(
      updatedTrack => dispatch(receiveTrack(updatedTrack)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const deleteTrack = trackId => dispatch => (
  TracksApiUtil.deleteTrack(trackId)
    .then(
      track => dispatch(removeTrack(track)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);
