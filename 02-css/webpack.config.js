 const path = require('path');

  module.exports = {
   mode:'development',
 	 entry: './src/index.js',
  	output: {
    filename: 'bundle2.js',
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