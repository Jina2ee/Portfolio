//webpack.config.js
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  target: "web",
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: {
    main: ["./src/app.js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    port: 9000,
    host: "0.0.0.0",
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true, // 압축
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./views/index.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./views/about.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "works.html",
      template: "./views/works.pug",
    }),
  ],
}
