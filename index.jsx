/*eslint-env node */
const ReactDOM = require ("react-dom");
const React = require('react');
const Routes = require ("./components/index");
const ReactDOMServer = require('react-dom').server
require ('./bulma.css')

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
const applyMiddleware = require("redux").applyMiddleware
const thunkMiddleware = require("redux-thunk").default
const createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore);
const store=createStoreWithMiddleware(reducer);


ReactDOM.render(
  <Provider store={store}>
  <Routes/>
  </Provider>,
  document.getElementById("content")
);
