import jokesReducer from './../../reducers/jokes_reducer';


describe('jokes_reducer tests', () => {
  it('should bring default state', () => {
    expect(jokesReducer(undefined, {})).toMatchSnapshot();
  })
  it('should add jokes categories to state', () => {
    const { categories } = jokesReducer(undefined, {
      type:'FETCH_JOKES_CATEGORIES',
      payload: ['science']
    })
    expect(categories[0]).toBe('science')
  })
  it('should add empty array if payload is null', () => {
    const { categories } = jokesReducer(undefined, {
      type:'FETCH_JOKES_CATEGORIES',
      payload: null
    })
    expect(categories.length).toBe(0)
  })
  it('should add empty array if payload is an empty array', () => {
    const { categories } = jokesReducer(undefined, {
      type:'FETCH_JOKES_CATEGORIES',
      payload: []
    })
    expect(categories.length).toBe(0)
  })
  it('should add create an array if payload is a string', () => {
    const { categories } = jokesReducer(undefined, {
      type:'FETCH_JOKES_CATEGORIES',
      payload: 'science'
    })
    expect(categories[0]).toBe('science')
  })
})