module.exports = {
  purge: {
    enabled: true,
    content: [ './src/**/*.html', './src/**/*.js' ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'menu': ['Patrick Hand', 'cursive'],
        'title': ['sans-serif'],
        'paragraph': ['sans-serif']
      },
      keyframes: {
        scalex: {
          '0%': { transform: 'scaleX(0.1)' },
          '100%': { transform: 'scaleX(1)' },
        },
        scrollin: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        }
      },
      animation: {
        scalex: 'scalex 1s ease-in-out',
        fadein: 'scrollin 1s ease-in forwards',
        'fadein-faster': 'scrollin 0.3s ease-in forwards',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
