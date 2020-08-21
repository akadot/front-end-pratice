const path = require("path");

module.exports = {
  entry: "./src/index.js", //main file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", //file converted
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },

  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
};
