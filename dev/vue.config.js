// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  },
  devServer:　{
    port: 8888,
  },
  publicPath: './',
  assetsDir: "",
  outputDir: 'dist'
}