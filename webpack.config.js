const Html_Webpack_Plugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ],
    plugins: [
      new Html_Webpack_Plugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  }
}