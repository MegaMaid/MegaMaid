const path = require('path')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix.config.vue.esModule = true

mix
  .js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')

  .sourceMaps()
  // .disableNotifications()
  .copyDirectory('resources/assets/images/ready', 'public/images')
  .copy('resources/assets/images/icons/apple-touch-icon.png', 'public/apple-touch-icon.png')
  .copy('resources/assets/images/icons/favicon-32x32.png', 'public/favicon-32x32.png')
  .copy('resources/assets/images/icons/favicon-16x16.png', 'public/favicon-16x16.png')
  .copy('resources/assets/images/icons/android-chrome-192x192.png', 'public/android-chrome-192x192.png')
  .copy('resources/assets/images/icons/android-chrome-512x512.png', 'public/android-chrome-512x512.png')
  .copy('resources/assets/images/icons/site.webmanifest', 'public/site.webmanifest')
  .copy('resources/assets/images/icons/safari-pinned-tab.svg', 'public/safari-pinned-tab.svg')
  .copy('resources/assets/images/icons/favicon.ico', 'public/favicon.ico')
  .copy('resources/assets/images/icons/mstile-150x150.png', 'public/mstile-150x150.png')
  .copy('resources/assets/images/icons/browserconfig.xml', 'public/browserconfig.xml')

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'jquery',
    'popper.js',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'bootstrap',
    'vue-router',
    'sweetalert2',
    'vuex-router-sync',
    '@fortawesome/fontawesome',
    '@fortawesome/vue-fontawesome'
  ])
}

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/assets/js')
    }
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  }
})
