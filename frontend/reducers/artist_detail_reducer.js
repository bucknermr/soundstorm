import { RECEIVE_ARTIST } from '../actions/artist_actions';


const artistDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ARTIST:
      return action.artist;
    default:
      return state;
  }
};

export default artistDetailReducer;
