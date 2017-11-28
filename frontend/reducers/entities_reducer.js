import { combineReducers } from 'redux';
import tracksReducer from './tracks_reducer';
import artistsReducer from './artists_reducer';

const entitiesReducer = combineReducers({
  tracks: tracksReducer,
  artists: artistsReducer
});

export default entitiesReducer;
