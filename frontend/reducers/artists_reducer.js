import { RECEIVE_ARTIST, RECEIVE_ARTISTS, UPDATE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_TRACK_DETAIL } from '../actions/track_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;

  switch(action.type) {
    case RECEIVE_ARTISTS:
    case RECEIVE_TRACK_DETAIL:
      return action.artists;
    case RECEIVE_ARTIST:
    case UPDATE_ARTIST:
      newState = merge({}, state);
      newState[action.artist.id] = action.artist;
      return newState;
    default:
      return state;
  }
};

export default artistsReducer;
