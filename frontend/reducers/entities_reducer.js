import { combineReducers } from 'redux';
import tracksReducer from './tracks_reducer';
import artistsReducer from './artists_reducer';
import artistDetailReducer from './artist_detail_reducer';

const entitiesReducer = combineReducers({
  tracks: tracksReducer,
  artists: artistsReducer,
  artistDetail: artistDetailReducer
});

export default entitiesReducer;
