import { combineReducers } from 'redux';
// Import reducers here

//This is needed to keep navigation syncronized with redux
import { routerReducer } from 'react-router-redux'

const appReducer = combineReducers({
  routing: routerReducer,
  authentication: '' // here the reducer
});

export default appReducer;
