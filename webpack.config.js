const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './single-spa-config.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  }
};