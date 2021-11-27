const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode:'development',
  watch:true,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  
  plugins: [new HtmlWebpackPlugin({
      filename:'index.html',
      template:'src/index.html'
  })],
  
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules:{
                mode: "local",
                localIdentName: "[local]--[hash:base64]"
              }
              
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};