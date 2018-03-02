import { JokesActionTypes } from '../actions/jokes';
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  categories: []
}

const setJokesCategories = (state = INITIAL_STATE, { type, payload }) => {
  payload = payload ? payload : [];
  if (typeof payload === 'string' ) {
    const newPayload = [
      payload
    ]
    payload = {...newPayload}
  }
  return {...state, categories: payload};
}

const HANDLERS = {
  [JokesActionTypes.FETCH_JOKES_CATEGORIES]: setJokesCategories
}

export default createReducer(INITIAL_STATE, HANDLERS);
