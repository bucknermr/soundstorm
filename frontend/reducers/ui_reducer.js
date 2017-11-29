import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import audioReducer from './audio_reducer';
import waveformReducer from './waveform_reducer';
import loadingReducer from './loading_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  audio: audioReducer,
  waveform: waveformReducer,
  loading: loadingReducer
});

export default uiReducer;
