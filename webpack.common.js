const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const is_prod = mode => (mode === 'production' ? true : false)

// define extractor class
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const postcss_common_plugins = mode => {
  if (is_prod(mode)) {
    return [
      'autoprefixer',
      'postcss-csso',
      /*[
        '@fullhuman/postcss-purgecss', {
          
          keyframes: true,
          
        }
      ]*/
    ]
  } else { /* development */
    return [
      'autoprefixer'
    ]
  }
}

const webpack_loaders = (mode, before_plugins, after_plugins) => [
  "style-loader",
  {
    loader: "css-loader",
    options: { importLoaders: 1 }
  },
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins:
          before_plugins
          .concat(postcss_common_plugins(mode))
          .concat(after_plugins)
      }
    }
  }
]

module.exports = mode => ({
  mode: mode,
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: ['styles', 'assets'],
    },
    assets: [
      './assets/360.png',
      './assets/360-dark-theme.png',
      './assets/epitech.png',
      './assets/isula.png',
      './assets/isula-dark-theme.png'
    ],
    styles: [
      './src/styles.css'
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: is_prod(mode) ? '[name].[contenthash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /animate\.css/,
        use: webpack_loaders(mode, [], [])
      },
      {
        test: /styles\.css$/,
        use: webpack_loaders(mode, ['tailwindcss'], [])
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  optimization: !is_prod(mode) ? undefined : {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  },
})
