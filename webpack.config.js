const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    example: './examples/index.js',
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
}
