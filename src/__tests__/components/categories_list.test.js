import shallowWithStore from '../../shallowWithStore';
import Enzyme, { shallow } from 'enzyme';
import CategoriesList from '../../components/categories_list';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Categories List Component', () => {
  it('should render', () => {
    const props = {}
    props.fetchJokesCategories = jest.fn();
    props.jokes = {}
    props.jokes.categories = []
    props.jokes.selectedJoke.category = '';
    const component = shallow(<CategoriesList {...props} />);
    expect(component).toMatchSnapshot();
  })
})