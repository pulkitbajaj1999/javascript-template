const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
    styles: './src/styles/app.css',
  },
  output: {
    filename: 'scripts/app.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'assets/', // relative to path
  },
  // module is used for integrating babel support
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: { version: 3 },
                  targets: 'defaults',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './',
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // chunks: ['main', 'styles'],
    }),
  ],
}
