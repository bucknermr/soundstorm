import * as ArtistsApiUtil from '../util/artists_api_util';

// Constants

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';

// Action Creators

export const receiveArtist = ({ artist, tracks }) => ({
  type: RECEIVE_ARTIST,
  artist,
  tracks
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtistUpdate = artist => ({
  type: UPDATE_ARTIST,
  artist
});

export const receiveArtistErrors = errors => ({
  type: RECEIVE_ARTIST_ERRORS,
  errors
});


// Thunk Action Creators

export const requestArtist = artistId => dispatch => (
  ArtistsApiUtil.fetchArtist(artistId)
    .then(
      payload => dispatch(receiveArtist(payload)),
      errors => dispatch(receiveArtistErrors(errors))
    )
);

export const updateArtist = (formData, artistId) => dispatch => (
  ArtistsApiUtil.updateArtist(formData, artistId)
    .then(artist => dispatch(receiveArtistUpdate(artist)))
);
