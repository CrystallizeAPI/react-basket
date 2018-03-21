const path = require('path');
// const styledComponentsPlugin = require('babel-plugin-styled-components');

module.exports = {
  entry: ['./module/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react'],
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  ssr: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  externals: {
    react: true,
    'react-dom': true,
    'styled-components': 'styled'
  }
};
