const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'public'),
      clean:true
    },
    optimization: {
        runtimeChunk: 'single',
      },
    mode:'development',
    watch:true,
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html'
        })
    ],
    module:{
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
                generator:{
                    filename: 'asset/image/[hash][ext][query]'
                }
            },
            
            {
                test: /\.css$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "postcss-loader"
                ],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    }
  };
  