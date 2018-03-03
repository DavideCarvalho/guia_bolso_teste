import { connect } from 'react-redux';
import CategoriesList from '../components/categories_list';
import Creators from '../actions/jokes.js';
const { fetchJokesCategories, selectJokeCategory } = Creators;

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { fetchJokesCategories, selectJokeCategory })(CategoriesList);