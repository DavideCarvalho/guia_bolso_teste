import { combineReducers } from 'redux';
import jokesReducer from './jokes_reducer';

const rootReducer = combineReducers({
  jokes: jokesReducer
})

export default rootReducer;
