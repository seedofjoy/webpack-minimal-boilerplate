module.exports = {
  context: __dirname + "/app",
  entry: "./main.js",
  output: {
    path: __dirname + "/build",
    filename: "[name].bundle.js",
    publicPath: '/build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader", enforce: "pre" }
    ]
  }
};
