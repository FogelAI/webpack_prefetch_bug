const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
        <head>
          <link rel="preload" as="script" href="http://localhost:3000/Module.js">
        </head>
        </html>
      `,
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "dist"),
        watch: true,
      },
    ],
    port: 3000,
  },
};
