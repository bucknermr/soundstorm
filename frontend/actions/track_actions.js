import * as TracksApiUtil from '../util/tracks_api_util';

// Constants

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK_DETAIL = 'RECEIVE_TRACK_DETAIL';
export const REMOVE_TRACK = 'DELETE_TRACK';


export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const CLEAR_TRACK_ERRORS =  'CLEAR_TRACK_ERRORS';

// Action Creators

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrackDetail = ({ track, artists, comments }) => ({
  type: RECEIVE_TRACK_DETAIL,
  track,
  artists,
  comments
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

export const requestTracksByArtist = artistId => dispatch => (
  TracksApiUtil.fetchTracksByArtist(artistId)
    .then(
      tracks => dispatch(receiveTracks(tracks)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const requestTrack = trackId => dispatch => (
  TracksApiUtil.fetchTrack(trackId)
    .then(
      payload => dispatch(receiveTrackDetail(payload)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const updateTrack = (formData, trackId) => dispatch => (
  TracksApiUtil.updateTrack(formData, trackId)
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
