// @flow
import axios from "axios";
import { createActions } from "reduxsauce";
const chuckNorrisApi = "https://api.chucknorris.io";

export const FETCH_JOKES_CATEGORIES = "FETCH_JOKES_CATEGORIES";
export const fetchJokesCategories = () => async (
  dispatch: (object: Object) => mixed
) => {
  try {
    const requestData = await axios.get(`${chuckNorrisApi}/jokes/categories`);
    const { data } = requestData;
    dispatch({
      type: FETCH_JOKES_CATEGORIES,
      payload: data
    });
    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const SELECT_JOKE_CATEGORY = "SELECT_JOKE_CATEGORY";
export const selectJokeCategory = (selectedCategory: string) => async (
  dispatch: (object: Object) => void
) => {
  try {
    const requestData = await axios.get(
      `${chuckNorrisApi}/jokes/random?category=${selectedCategory}`
    );
    const { data } = requestData;
    data.category = selectedCategory;
    dispatch({
      type: SELECT_JOKE_CATEGORY,
      payload: data
    });
    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const INPUT_SEARCH_JOKE = "INPUT_SEARCH_JOKE";
export const inputSearchJoke = (input: string) => async (
  dispatch: (object: Object) => mixed
) => {
  dispatch({
    type: INPUT_SEARCH_JOKE,
    payload: input
  });
};

export const SEARCH_JOKE = 'SEARCH_JOKE';
export const searchJoke = (input: string) => async (
  dispatch: (object: Object) => mixed
) => {
  try {
    const { data } = await axios.get(`${chuckNorrisApi}/jokes/search?query=${input}`)
    dispatch({
      type: SEARCH_JOKE,
      payload: data
    });
    Promise.resolve(true);
  } catch (e) {
    Promise.reject(e);
  }
};

const { Types, Creators } = createActions({
  fetchJokesCategories,
  selectJokeCategory,
  inputSearchJoke,
  searchJoke
});

export const JokesActionTypes = Types;
export default Creators;
