import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, logger, promise),
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
