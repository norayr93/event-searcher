import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  eventReducer,
  userReducer
});

export default rootReducer;
