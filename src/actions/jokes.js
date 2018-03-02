import axios from 'axios';
import { createActions } from 'reduxsauce';
const chuckNorrisApi = 'https://api.chucknorris.io';

export const FETCH_JOKES_CATEGORIES = 'FETCH_JOKES_CATEGORIES';
export const fetchJokesCategories = () => async (dispatch) => {
  console.log('to aqui');
  const requestData = await axios.get(`${chuckNorrisApi}/jokes/categories`);
  const { data } = requestData;
  dispatch({
    type: FETCH_JOKES_CATEGORIES,
    payload: data
  });
}

const { Types, Creators } = createActions({
  fetchJokesCategories
});

export const JokesActionTypes = Types;
export default Creators;
