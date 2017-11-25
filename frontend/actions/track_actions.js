import * as TracksApiUtil from '../util/tracks_api_util';

// Constants

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'DELETE_TRACK';

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

// Thunk Action Creators

export const createTrack = formData => dispatch => (
  TracksApiUtil.createTrack(formData)
    .then(track => dispatch(receiveTrack(track)))
);

export const requestTracks = () => dispatch => (
  TracksApiUtil.fetchTracks()
    .then(tracks => dispatch(receiveTracks(tracks)))
);

export const requestTrack = trackId => dispatch => (
  TracksApiUtil.fetchTrack(trackId)
    .then(track => dispatch(receiveTrack(track)))
);

export const updateTrack = track => dispatch => (
  TracksApiUtil.updateTrack(track)
    .then(updatedTrack => dispatch(receiveTrack(updatedTrack)))
);

export const deleteTrack = trackId => dispatch => (
  TracksApiUtil.deleteTrack(trackId)
    .then(track => dispatch(removeTrack(track)))
);
