// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  },
  publicPath: '/myport/',
  outputDir: 'docs'
}