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
  },
  searchJokeInput: '',
  jokesSearched: []
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
  return {...state, selectedJoke: payload}
}

const inputSearchJoke = (state = INITIAL_STATE, { type, payload }) => {
  return {...state, searchJokeInput: payload}
}

const jokesFound = (state = INITIAL_STATE, {type, payload}) => {
  return {...state, jokesSearched: payload.result}
}

const HANDLERS = {
  [JokesActionTypes.FETCH_JOKES_CATEGORIES]: setJokesCategories,
  [JokesActionTypes.SELECT_JOKE_CATEGORY]: selectJokeCategory,
  [JokesActionTypes.INPUT_SEARCH_JOKE]: inputSearchJoke,
  [JokesActionTypes.SEARCH_JOKE]: jokesFound
}

export default createReducer(INITIAL_STATE, HANDLERS);
