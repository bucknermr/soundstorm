import { combineReducers } from 'redux';
import tracksReducer from './tracks_reducer';
import artistsReducer from './artists_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  tracks: tracksReducer,
  artists: artistsReducer,
  comments: commentsReducer
});

export default entitiesReducer;
