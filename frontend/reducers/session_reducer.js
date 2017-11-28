import { RECEIVE_CURRENT_ARTIST } from '../actions/session_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const _nullCurrentArtist = {
  currentArtist: null
};

const sessionReducer = (state = _nullCurrentArtist, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_ARTIST:
      return { currentArtist: action.artist };
    case RECEIVE_ARTIST:
      if (state.currentArtist && state.currentArtist.id === action.artist.id) {
        return { currentArtist: action.artist };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default sessionReducer;
