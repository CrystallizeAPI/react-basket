import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default {
  input: 'module/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    exports: 'named',
    name: pkg.name,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled',
      'react-i18next': 'reactI18nextModule'
    }
  },
  external: ['react', 'react-dom', 'styled-components', 'react-i18next'],
  plugins: [
    resolve({
      browser: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-class-properties']
    })
  ]
};
