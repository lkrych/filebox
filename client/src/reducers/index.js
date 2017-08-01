import { combineReducers } from 'redux';
import FilesReducer from './files_reducer';

const rootReducer = combineReducers({
  files: FilesReducer,
});

export default rootReducer;
