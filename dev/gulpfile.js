var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');


// Sassコンパイル
gulp.task('css', function () {
    return gulp.src('./web/src/sass/**/index.scss')// indexのみコンパイル
            .pipe(sass()) // コンパイル実行
            .pipe(autoprefixer({cascade: false})) // ベンダープレフィックスの付与,package.json browserslistで設定
            .pipe(gulp.dest('./web/asset/css/')); // 出力
});

//css minify
gulp.task('mincss', function () {
  return gulp.src('./web/asset/css/hidari-kikino-eren/*.css') // フォルダ名部分は適宜作業フォルダ名に変更
              .pipe(cleanCSS()) // cssを圧縮
              .pipe(rename({extname:'.min.css'})) // 名前を.min.cssにする
              .pipe(gulp.dest('./web/asset/min/')) // 出力
});

//Sassコンパイルとcss minify タスク
gulp.task('watch',function(){
  gulp.watch('./web/src/sass/**/*.scss', gulp.series('css','mincss')); //監視対象は全てのSassファイル
})

// browserSync リロード
gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});

//browserSync
gulp.task('browser-sync', function(done) {
  browserSync({
    server: {
        baseDir: "./web/",    //ルート設定
        index  : "./data/hidari-kikino-eren/index.html"    //インデックスファイル フォルダ・ファイル名は適宜書き換える！
    }
  });
  gulp.watch('./web/data/**/*.html',gulp.task('bs-reload')); //監視対象
  gulp.watch('./web/src/sass/**/*.scss',gulp.task('bs-reload')); //監視対象
  gulp.watch('./web/src/js/**/*.js',gulp.task('bs-reload')); //監視対象
  done();
});

gulp.task('default', gulp.parallel('browser-sync','watch'));