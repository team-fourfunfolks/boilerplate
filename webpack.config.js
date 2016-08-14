var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './app/entry.js']
  },

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Tells webpack to ignore trying to require any modules fs or ipc
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}
