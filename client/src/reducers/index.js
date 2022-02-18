import displayReducer from './displayReport';
import loggedReducer from './isLogged';
import feedDataReducer from './feedData';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  display: displayReducer,
  logged: loggedReducer,
  feed: feedDataReducer,
})

export default rootReducer