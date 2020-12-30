const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtensionManifestPlugin = require("webpack-extension-manifest-plugin");

const pkg = require("./package.json");
const baseManifest = require("./src/manifest.json");

module.exports = {
  entry: {
    options: "./src/options.js",
    main: "./src/main.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.css$/, use: [ "css-loader", "postcss-loader" ] },
      { test: /\.png$/, use: "file-loader" }
    ]
  },
  resolve: {
    extensions: [ ".js" ],
    alias: { "@": path.resolve(__dirname, "./src") }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "S-CSS-P Options",
      template: "./src/options.html",
      filename: "options.html",
      chunks: ["options"],
      meta: { viewport: "width=device-width, initial-scale=1" },
      manifest: "manifest.json",
      hash: true
    }),
    new CopyWebpackPlugin({
      patterns: [ { from: "./src/img", to: "./img" } ]
    }),
    new ExtensionManifestPlugin({
      config: {
        base: baseManifest,
        extend: { version: pkg.version }
      }
    })
  ]
};
