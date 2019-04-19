// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {SymptomReducer} from './SymptomReducer';

export default combineReducers({
  appState:appReducer,
  SymptomState:SymptomReducer,
  routing
  // More reducers if there are
  // can go here
})
