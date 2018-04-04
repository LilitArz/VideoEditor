const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/root",
  output: {
    path: __dirname + "/dist",
    filename: "source.js"
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.pug$/,
        use: [{ loader: "raw-loader" }, { loader: "pug-html-loader" }]
      },
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
