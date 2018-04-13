const path = require('path');

module.exports = {
  entry: ['./module/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'stage-0', 'react']
          }
        }
      }
    ]
  },
  externals: {
    react: 'commonjs react',
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    }
  }
};
