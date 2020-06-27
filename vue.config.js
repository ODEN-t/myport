const path = require('path');

module.exports = {
  publicPath: '/',
  assetsDir: '',
  outputDir: 'dist',
  devServer: {
    open: true
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/global.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
};
