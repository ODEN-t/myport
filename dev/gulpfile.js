const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const pageName = "hidari-kikino-eren"; // 適宜書き換える

// Sassコンパイル
gulp.task('sass', function () {
  console.log('task: sass');
    return gulp.src('./web/src/sass/**/index.scss')
    .pipe(sass({outputStyle: 'compressed'})) // コンパイル実行
    .pipe(postcss([ autoprefixer() ])) // ベンダープレフィックスの付与,package.json browserslistで設定
    .pipe(gulp.dest('./web/public/')) // 出力 
    .pipe(browserSync.stream()); 
});

//webpack
gulp.task("webpack", function(){
  console.log('task: webpack');
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("./web/public/" + pageName + "/"));
});

//browserSync
gulp.task('browser-sync', function() {
  console.log('task: browser-sync');
  browserSync.init({
    browser: 'Google Chrome',
    server: {
      baseDir: "./web/",    //ルート設定
      index  : "/data/" + pageName + "/index.html"
    },
    https: true
  })
});

gulp.task('reload', function(done){
  browserSync.reload();
  done();
});

gulp.task('watch-files', function() {
  gulp.watch('./web/src/sass/**/*.scss', gulp.task('sass'));
  gulp.watch('./web/src/js/**/*.js',  gulp.series('webpack', 'reload'));
  gulp.watch('./web/data/**/*.html', gulp.task('reload'));
  console.log('All files watching');
})

gulp.task('default', gulp.parallel('browser-sync', 'watch-files', function(){
  console.log('build complete!');
}))