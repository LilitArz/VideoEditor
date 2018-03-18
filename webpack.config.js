const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/root",
  output: {
    path: __dirname + "/dist",
    filename: "source.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/root/index.html",
      filename: "index.html",
      inject: "body"
    })
  ]
}
