const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3004
  },
  output: {
    publicPath: "http://localhost:3004/"
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
      name: "app4",
      library: { type: "var", name: "app4" },
      filename: "remoteEntry.js",
      remotes: {
        app1: "app1",
        app2: "app2",
        app3: "app3",
        app5: "app5"
      },
      exposes: {},
      shared: ["react", "react-dom", "react-relay"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
