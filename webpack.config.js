const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          'url-loader?name=/image/[name].[ext]'
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules']
  }
};
