import { combineReducers } from 'redux';
import MusicReducer from './reducer_musicdata.js';

const rootReducer = combineReducers({
  musicData: MusicReducer
});

export default rootReducer;
