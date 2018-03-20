import babel from 'rollup-plugin-babel';

export default {
  input: 'module/index.js',
  output: {
    format: 'umd',
    name: 'ReactBasket',
    file: './dist/index.js'
  },
  plugins: [
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ],
        'stage-0',
        'react'
      ],
      plugins: ['external-helpers'],
      externalHelpers: true
    })
  ]
};
