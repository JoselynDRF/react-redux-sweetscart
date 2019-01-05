const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: ['./src/index.jsx'],
  output: {
    filename: 'app.js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },

  module: {
    rules: [
      { test: /(\.js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(png|jpg|gif|ico)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]' } },
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
};
