/*eslint-env node */
const ReactDOM = require ("react-dom");
const React = require('react');
const Index = require ("./components/index");
require ('./bulma.css')
ReactDOM.render(
  <Index/>,
  document.getElementById("content")
);
