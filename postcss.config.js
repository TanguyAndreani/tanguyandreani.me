module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-csso': {},
    '@fullhuman/postcss-purgecss': {
      content: ['./public/***.html'],
      keyframes: true
    }
  },
}
