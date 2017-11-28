export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const SEEK_TRACK = 'SEEK_TRACK';
export const SEEK_WAVEFORM = 'SEEK_WAVEFORM';
export const ACTIVATE_PAUSE_BUTTON = 'ACTIVATE_PAUSE_BUTTON';

export const playTrack = (position, track) => ({
  type: PLAY_TRACK,
  payload: { position, track, trackId: track.id, paused: false }
});

export const pauseTrack = (position) => ({
  type: PAUSE_TRACK,
  position
});

export const seekTrack = (position, trackId) => ({
  type: SEEK_TRACK,
  position,
  trackId
});

export const seekWaveform = (position, trackId) => ({
  type: SEEK_WAVEFORM,
  position,
  trackId
});

export const play = (track) => (dispatch, getState) => {
  const position = getState().ui.waveform[track.id];
  dispatch(playTrack(position, track));
};

export const pause = (track) => (dispatch, getState) => {
  const position = getState().ui.waveform[track.id];
  dispatch(pauseTrack(position));
};
