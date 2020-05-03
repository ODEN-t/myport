const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
  configureWebpack: {
    publicPath: './',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/, // ローダーの対象から外す
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"  // プリセットを指定することで、ES2019 を ES5 に変換
              ]
            }
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false 
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            'babel-loader',
            'vue-svg-loader',
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader"},
            { loader: "css-loader" },
            { loader: "postcss-loader"},
            { loader: "sass-loader"},
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, './src/styles/global.scss')
                ]
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
            'postcss-loader'
          ]
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            loaders:{
              'scss': ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] // <style lang="scss">
            } 
          }
        }
      ]
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      },
      extensions: ["*", ".js", ".vue", ".json"]
    }
  }
}

module.exports = config;