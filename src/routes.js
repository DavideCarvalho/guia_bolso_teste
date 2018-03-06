import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import React from "react";
import App from "./App";
import CategoryList from "./connections/connected_categories_list";
import SearchJoke from "./connections/connected_search_joke";
import promise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

const app = (
  <Router>
    <App>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={CategoryList} />
          <Route path="/categories" component={CategoryList} />
          <Route path="/search" component={SearchJoke} />
        </Switch>
      </Provider>
    </App>
  </Router>
);

export default app;
