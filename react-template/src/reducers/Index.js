import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {authStateReducer} from './Auth';
import headerReducer from './Header';

export const allReducers = combineReducers({
  auth: authStateReducer,
  routing: routerReducer,
  header: headerReducer,
});

export default allReducers;
