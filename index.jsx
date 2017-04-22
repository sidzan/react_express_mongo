/*eslint-env node */
const ReactDOM = require ("react-dom");
const React = require('react');
const Routes = require ("./components/index");
const ReactDOMServer = require('react-dom').server

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
const applyMiddleware = require("redux").applyMiddleware
const thunkMiddleware = require("redux-thunk").default
const createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore);
const store=createStoreWithMiddleware(reducer);
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
  <Provider store={store}>
      <MuiThemeProvider>
        <Routes/>
      </MuiThemeProvider>
  </Provider>,
  document.getElementById("content")
);
