import * as ArtistsApiUtil from '../util/artists_api_util';

// Constants

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

// Action Creators

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

// Thunk Action Creators

export const requestArtist = artistId => dispatch => (
  ArtistsApiUtil.fetchArtist(artistId)
    .then(artist => dispatch(receiveArtist(artist)))
);

export const updateArtist = (formData, artistId) => dispatch => (
  ArtistsApiUtil.updateArtist(formData, artistId)
    .then(updatedArtist => dispatch(receiveArtist(updatedArtist)))
);
