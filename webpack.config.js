const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    context: __dirname,
    entry: ['@babel/polyfill', './src/client/index.tsx'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json']
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
          test: /\.tsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'ts-loader'
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
        {
          test: /\.s?css$/,
          use: [{
            loader: ExtractCssChunks.loader
          }, {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 24576
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        favicon: 'public/images/react.png'
      }),
      new ExtractCssChunks({
        path: path.join(__dirname, 'dist'),
        filename: 'style.css'
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      port: 3000,
      proxy: {
        '/auth/eventbrite': 'http://localhost:5000',
        '/api/*': {
          target: 'http://localhost:5000'
        }
      }
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};
