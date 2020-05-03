const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  publicPath: "/myport/",
  assetsDir: "",
  outputDir: "dist",
  devServer: {
    port: 9999,
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
        vue$: "vue/dist/vue.esm.js",
        '@': path.resolve(__dirname, 'src/'),
      }
    }  
  }
}