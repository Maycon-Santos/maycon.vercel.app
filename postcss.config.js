module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./src/styles/media-queries.css'],
    },
    'postcss-custom-media': {},
    'postcss-nested': {},
  },
}
