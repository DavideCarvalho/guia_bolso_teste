import jokesReducer from "./../../reducers/jokes_reducer";

const selectedJokeMock = {
  category: "science",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "zfgekm2usfyfra7m5x0wta",
  url: "https://api.chucknorris.io/jokes/zfgekm2usfyfra7m5x0wta",
  value:
    "If tapped, a Chuck Norris roundhouse kick could power the country of Australia for 44 minutes."
};

const searchJokesMock = {
  total: 1,
  result: [
    {
      category: "science",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "zfgekm2usfyfra7m5x0wta",
      url: "https://api.chucknorris.io/jokes/zfgekm2usfyfra7m5x0wta",
      value:
        "If tapped, a Chuck Norris roundhouse kick could power the country of Australia for 44 minutes."
    }
  ]
}

describe("jokes_reducer tests", () => {
  it("should bring default state", () => {
    expect(jokesReducer(undefined, {})).toMatchSnapshot();
  });
  it("should add jokes categories to state", () => {
    const { categories } = jokesReducer(undefined, {
      type: "FETCH_JOKES_CATEGORIES",
      payload: ["science"]
    });
    expect(categories[0]).toBe("science");
  });
  it("should add empty array if payload is null", () => {
    const { categories } = jokesReducer(undefined, {
      type: "FETCH_JOKES_CATEGORIES",
      payload: null
    });
    expect(categories.length).toBe(0);
  });
  it("should add empty array if payload is an empty array", () => {
    const { categories } = jokesReducer(undefined, {
      type: "FETCH_JOKES_CATEGORIES",
      payload: []
    });
    expect(categories.length).toBe(0);
  });
  it("should add create an array if payload is a string", () => {
    const { categories } = jokesReducer(undefined, {
      type: "FETCH_JOKES_CATEGORIES",
      payload: "science"
    });
    expect(categories[0]).toBe("science");
  });
  it("should add selectedJoke to the state", () => {
    const { selectedJoke } = jokesReducer(undefined, {
      type: "SELECT_JOKE_CATEGORY",
      payload: selectedJokeMock
    });
    expect(selectedJoke).toMatchSnapshot();
  });
  it("should add selectedJoke to the state", () => {
    const toBeState = [
      {
        category: "science",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "zfgekm2usfyfra7m5x0wta",
        url: "https://api.chucknorris.io/jokes/zfgekm2usfyfra7m5x0wta",
        value:
          "If tapped, a Chuck Norris roundhouse kick could power the country of Australia for 44 minutes."
      }
    ]
    const { searchedJokes } = jokesReducer(undefined, {
      type: "SELECT_JOKE_CATEGORY",
      payload: searchJokesResult
    });
    expect(selectedJoke).toBe(toBeState)
  });
});
