const webpack = require('webpack')
const path = require('path')
const hwp = require('html-webpack-plugin')

module.exports = {
  entry: './src/',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname + '/src',
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', '@svgr/webpack'],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
    ]
  },
  plugins: [new hwp({  favicon: path.join(__dirname, '/src/assets/favicon/ms-icon-310x310.ico'), template: path.join(__dirname, '/src/index.html') })]
}
