import values from 'lodash/values';

export const singleArtist = state => {
  return values(state.entities.artists)[0];
};

export const tracksArray = state => {
  return values(state.entities.tracks);
};
