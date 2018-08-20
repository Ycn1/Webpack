 const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
   mode:'development',
 	 

   entry:{

      index: './src/common/common.js',
      common:'./src/index/index.js'

   },
  	output: {
    filename: '[name].[Hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           
           'url-loader'
           
         ]
       }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
              template:'./src/view/index.html',
              filename:'index.html'
           }
          ),
        new CleanWebpackPlugin(['dist']),
    ],
    devServer: {
     contentBase: './dist'
   },
  };