const base = require('./webpack.base.config')
const webpack = require('webpack')

const config = Object.assign({}, base, {
  plugins: [
    // strip comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'client-vendor-bundle.js'
    }),
    //jQuery
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
  ]
})

if (process.env.NODE_ENV === 'production') {
  // extract CSS into a single file so it's applied on initial render
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  config.vue.loaders = {
    scss: ExtractTextPlugin.extract({
      loader: "css-loader!sass-loader",
      fallbackLoader: "vue-style-loader"
    }), 
    sass: ExtractTextPlugin.extract({
      loader: "css-loader!sass-loader?indentedSyntax",
      fallbackLoader: "vue-style-loader"
    }),
    css: ExtractTextPlugin.extract({
      loader: "css-loader",
      fallbackLoader: "vue-style-loader"
    }),
    postcss: ExtractTextPlugin.extract({
      loader: "css-loader",
      fallbackLoader: "vue-style-loader"
    })
  }

  config.plugins.push(
    new ExtractTextPlugin('styles.css'),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = config
