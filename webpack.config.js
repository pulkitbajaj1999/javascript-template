const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  devServer: {
    contentBase: './',
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [new CleanWebpackPlugin()],
}
