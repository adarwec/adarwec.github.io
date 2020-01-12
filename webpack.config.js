const path = require("path");

module.exports = [
  {
    context: path.resolve(__dirname, "src"),
    entry: ["@babel/polyfill", "./index.js"],
    output: {
      path: path.resolve(__dirname, "dist/private/js"),
      filename: "app.js"
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader",
          options: {
            configFile: path.resolve(__dirname, "babel.config.js")
          }
        },

        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  }
];
