const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003
  },
  output: {
    publicPath: "http://localhost:3003/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
          plugins: ["relay"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app3",
      library: { type: "var", name: "app3" },
      filename: "remoteEntry.js",
      remotes: {
        app1: "app1",
        app2: "app2"
      },
      exposes: {
        Modal: "./src/Modal"
      },
      shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
