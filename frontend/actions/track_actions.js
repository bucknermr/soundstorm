import * as TracksApiUtil from '../util/tracks_api_util';

// Constants

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK_DETAIL = 'RECEIVE_TRACK_DETAIL';
export const REMOVE_TRACK = 'DELETE_TRACK';

export const TRACK_LOADING = 'TRACK_LOADING';
export const TRACK_INDEX_LOADING = 'TRACK_INDEX_LOADING';
export const TRACK_SAVING = 'TRACK_SAVING';

export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const CLEAR_TRACK_ERRORS =  'CLEAR_TRACK_ERRORS';

// Action Creators

export const receiveTracks = ({ tracks, artists }) => ({
  type: RECEIVE_TRACKS,
  tracks,
  artists
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

export const trackLoading = () => ({
  type: TRACK_LOADING
});

export const trackIndexLoading = () => ({
  type: TRACK_INDEX_LOADING
});

export const trackSaving = () => ({
  type: TRACK_SAVING
})

// Thunk Action Creators

export const createTrack = formData => dispatch => {
  dispatch(trackSaving());
  return TracksApiUtil.createTrack(formData)
  .then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const requestTracksByPlayCount = limit => dispatch => {
  dispatch(trackIndexLoading());
  return TracksApiUtil.fetchTracksByPlayCount(limit)
  .then(
    payload => dispatch(receiveTracks(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
}

export const requestTrack = trackId => dispatch => {
  dispatch(trackLoading());
  return TracksApiUtil.fetchTrack(trackId)
    .then(
      payload => dispatch(receiveTrackDetail(payload)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
};

export const updateTrack = (formData, trackId) => dispatch => {
  dispatch(trackSaving());
  return TracksApiUtil.updateTrack(formData, trackId)
  .then(
    updatedTrack => dispatch(receiveTrack(updatedTrack)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const incrementPlayCount = trackId => dispatch => (
  TracksApiUtil.incrementPlayCount(trackId)
    .then(updatedTrack => dispatch(receiveTrack(updatedTrack)))
);

export const deleteTrack = trackId => dispatch => (
  TracksApiUtil.deleteTrack(trackId)
    .then(
      track => dispatch(removeTrack(track)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const searchTracks = term => dispatch => {
  dispatch(trackIndexLoading());
  TracksApiUtil.searchTracks(term)
    .then(payload => {
      console.log("payload!", payload);
      return dispatch(receiveTracks(payload));
    });
    // .then(payload => dispatch(receiveTracks(payload)));
};
