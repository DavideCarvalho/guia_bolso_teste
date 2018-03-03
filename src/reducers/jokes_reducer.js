import { JokesActionTypes } from '../actions/jokes';
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  categories: [],
  selectedJoke: {
    category: '',
    icon_url: '',
    id: '',
    url: '',
    value: ''
  }
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

const selectJokeCategory = (state = INITIAL_STATE, { type, payload }) => {
  console.log(payload)
  return {...state, selectedJoke: payload}
}

const HANDLERS = {
  [JokesActionTypes.FETCH_JOKES_CATEGORIES]: setJokesCategories,
  [JokesActionTypes.SELECT_JOKE_CATEGORY]: selectJokeCategory
}

export default createReducer(INITIAL_STATE, HANDLERS);
