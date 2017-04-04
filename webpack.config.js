const path = require('path');
const webpack = require('webpack')
const ProvidePlugin = require('webpack/lib/ProvidePlugin'); 
const ReactStaticPlugin = require('react-static-webpack-plugin');

var nodeModules = path.resolve(path.join(__dirname, 'node_modules'));
module.exports = {
   entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index.jsx'
    // the entry point of our app
  ],
  output: {
    path: path.resolve(__dirname,'static'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: path.resolve(__dirname,'static'),
    // match the output path
    publicPath: '/static'
    // match the output `publicPath`
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.jsx$/, loader: ['babel-loader'], exclude: /node_modules/ },
     // { test: /jquery\.js$/, loader: 'expose', query: {jQuery: true,$: true}},
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'},
      { test: /\.scss$/, use: ['raw-loader', 'sass-loader']},
      { test: /\.(css|scss)$/,include: [path.join(nodeModules, 'bootstrap'),],loaders: ["style", "css", "sass"]},      

    ]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Util: "exports-loader?Util!bootstrap/js/dist/util"
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
}
