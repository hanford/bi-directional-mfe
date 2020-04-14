const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3006
  },
  output: {
    publicPath: "http://localhost:3006/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app6",
      library: { type: "var", name: "app6" },
      filename: "remoteEntry.js",
      remotes: {
        app4: "app4"
      },
      exposes: {
        Router: "./src/Router"
      },
      shared: ["react", "react-dom", "react-router-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
