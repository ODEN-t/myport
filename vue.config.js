const path = require('path');

module.exports = {
  publicPath: '/',
  assetsDir: '',
  outputDir: 'dist',
  devServer: {
    open: true
  },
  pages: {
    index: {
      // 最初に実行されるファイル名
      entry: 'src/main.js',
      // タイトルの設定
      // <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'My Portforio'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/styles/base/_colors.scss";
        @import "@/styles/base/_breakpoint.scss";
        `
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
