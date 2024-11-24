const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/client/js/index.js', // Ensure this is the correct path to your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
