import displayReducer from './displayReport';
import loggedReducer from './isLogged';

import { combineReducers } from 'redux';
import { display } from '@mui/system';

const rootReducer = combineReducers({
  display: displayReducer,
  logged: loggedReducer
})

export default rootReducer