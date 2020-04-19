const pageName = "hidari-kikino-eren";  // 適宜書き換える

module.exports  = {
  mode: "production",
  entry: "./web/src/js/" + pageName + "/index.js",
  output: {
    filename: "bundle.js"
  }
}
