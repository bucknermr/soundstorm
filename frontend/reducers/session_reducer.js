import { RECEIVE_CURRENT_ARTIST } from '../actions/session_actions';

const _nullCurrentArtist = {
  currentArtist: null
};

const sessionReducer = (state = _nullCurrentArtist, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_ARTIST:
      return { currentArtist: action.artist };
    default:
      return state;
  }
};

export default sessionReducer;
