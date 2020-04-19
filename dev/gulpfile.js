const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync');

// Sassコンパイル
gulp.task('css', function () {
    return gulp.src('./web/src/sass/**/index.scss')// indexのみコンパイル
    .pipe(sass({outputStyle: 'compressed'})) // コンパイル実行
    .pipe(postcss([ autoprefixer() ])) // ベンダープレフィックスの付与,package.json browserslistで設定
    .pipe(gulp.dest('./web/css/')); // 出力
});

// //SassコンパイルとWatch
gulp.task('watch',function(){
  gulp.watch('./web/src/sass/**/*.scss', gulp.task('css')); //監視対象は全てのSassファイル
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
        index  : "/data/hidari-kikino-eren/index.html"    //インデックスファイル フォルダ・ファイル名は適宜書き換える！
    }
  });
  gulp.watch('./web/data/**/*.html',gulp.task('bs-reload')); //監視対象
  gulp.watch('./web/src/sass/**/*.scss',gulp.task('bs-reload')); //監視対象
  gulp.watch('./web/src/js/**/*.js',gulp.task('bs-reload')); //監視対象
  done();
});

gulp.task('default', gulp.parallel('browser-sync','watch'));