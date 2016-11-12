module.exports = {
  context: __dirname + "/app",
  entry: "./main.js",
  output: {
    path: __dirname + "/build",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader", enforce: "pre" }
    ]
  }
};
