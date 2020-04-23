import {combineReducers} from 'redux';
import postReducer from './postreducer.js';

export default combineReducers({
allpost:postReducer    //I think this is where redux hold the state.
})