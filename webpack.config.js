const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV;
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const GLOBALS = {
  __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
};

console.log(GLOBALS.__DEV__);


module.exports = {
  mode,
  entry: {
    'mine-wiser': './src/index.js',
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
    },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Crypto Coin Admin Panel',
      template: 'src/index.html',
    }),
  ],
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8081,
  },
};
