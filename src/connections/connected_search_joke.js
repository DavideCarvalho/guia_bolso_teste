import SearchJoke from '../components/search_joke';
import { connect } from 'react-redux';
import Creators from '../actions/jokes.js';
const { inputSearchJoke, searchJoke } = Creators;

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { inputSearchJoke, searchJoke })(SearchJoke);
