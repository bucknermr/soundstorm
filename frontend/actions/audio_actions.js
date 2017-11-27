export const PLAY_TRACK = 'PLAY_TRACK';
export const SEEK_TRACK = 'SEEK_TRACK';
export const SEEK_WAVEFORM = 'SEEK_WAVEFORM';

export const playTrack = (position, track) => ({
  type: PLAY_TRACK,
  payload: { position, track, trackId: track.id }
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
