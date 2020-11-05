const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
     },
     output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
     devtool: 'inline-source-map',
     devServer: {
        port: 4000,
        contentBase: ['./src', './public'], // both src and output dirs
        watchContentBase: true,
        inline: true,
       hot: true,
       clientLogLevel: 'silent'
     },
    module: {
      rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
          },
        {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: ['file-loader?name=[name].[ext]']
        }
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        inject: true,
        filename: 'index.html',
        favicon: './src/assets/favicon.ico',
        template: './public/index.html'
      }),
    ],
  };
  