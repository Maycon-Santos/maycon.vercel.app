module.exports = {
  plugins: {
    'postcss-nested': {},
    '@csstools/postcss-global-data': {
      files: ['./src/styles/media-queries.css'],
    },
    'postcss-custom-media': {},
  },
}
