const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    'vendor': './src/vendor',
    'app': './src/main'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.es6', '.js', '.json']
  },
  module: {
    preLoaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'tslint' }
    ],
    loaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html/, loader: 'html?minimize=false' },
      { test: /\.styl$/, loader: 'css!stylus' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(gif|png|jpe?g)$/i, loader: 'file?name=images/[name].[ext]' },
      { test: /\.woff2?$/, loader: 'url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)$/, loader: 'file?name=fonts/[name].[ext]' }
    ]
  }
};

if (!(process.env.WEBPACK_ENV === 'production')) {
  config.devtool = 'source-map';
  config.plugins = [
    new webpack.DefinePlugin({
      'WEBPACK_ENV': '"dev"',
      'API_URL': '"http://localhost:3333"',
      'AMPLITUDE_API_KEY': '""'
    })
  ]
} else {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'WEBPACK_ENV': '"production"',
      'API_URL': '"//pewnywoz.pl:3333"',
      'AMPLITUDE_API_KEY': '"559154678433ef416482337466cad4ca"'
    }),
    new CopyWebpackPlugin([{ from: './src/index.html' }], {})
  ];
}

module.exports = config;
