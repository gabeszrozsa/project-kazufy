const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, argv) {
  return {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.(s?)css$/,
            use:  ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          exclude: /index.html/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      }),
      new webpack.DefinePlugin({
        DEV_MODE: argv.mode === 'development'
      })
    ],
    devServer: {
      contentBase: './public',
    }
  };
}
