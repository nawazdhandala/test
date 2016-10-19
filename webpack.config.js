var webpack = require('webpack')
var config = {
   entry: './app/main.js',
	
   output: {
      path:'./',
      filename: 'index.min.js',
   },
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
              plugins: ['transform-decorators-legacy',"transform-class-properties"],
              presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // })
    ]
}

module.exports = config;