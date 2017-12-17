const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const GLOBALS = {
  __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
};

console.log(GLOBALS.__DEV__);

const extractSass = new ExtractTextWebpackPlugin({
  // filename: '[name].[contenthash].css',
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: {
    'mine-wiser': './src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader',
      },
      {
        test: /\.scss|.css?$/,
        loader: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      title: 'The Minimal React Webpack Babel Setup!',
      template: 'src/index.html',
      inject: true,
    }),
    extractSass,
  ],
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8081,
  },
};
