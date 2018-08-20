 const path = require('path');

  module.exports = {
   mode:'development',
 	 

   entry:{

      index: './src/common/common.js',
      common:'./src/index/index.js'

   },
  	output: {
    filename: '[name].bundle.js',
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
    }
  };