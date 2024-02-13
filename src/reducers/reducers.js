import { combineReducers } from 'redux';
import apiReducer from './../Slices/apiSlice';

const rootReducer = combineReducers({
  api: apiReducer,
})

export default rootReducer;