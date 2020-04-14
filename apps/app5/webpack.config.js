const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3005
  },
  output: {
    publicPath: "http://localhost:3005/"
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
      name: "app5",
      library: { type: "var", name: "app5" },
      filename: "remoteEntry.js",
      remotes: {
        app4: "app4"
      },
      exposes: {
        About: "./src/About"
      },
      shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
