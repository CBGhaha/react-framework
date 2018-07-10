import {createStore} from 'redux';
import { combineReducers } from 'redux';
import * as reducers from './reducer/index.js';
const store =createStore(combineReducers({...reducers}));
export default store;
