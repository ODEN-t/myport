var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');


// Sassをコンパイルするタスクの設定
gulp.task("css", function () {
    return gulp.src('./hidari-kikino-eren/src/*.scss')// コンパイル対象のSassファイル
            .pipe(sass()) // コンパイル実行
            .pipe(autoprefixer()) // ベンダープレフィックスの付与
            .pipe(gulp.dest('./hidari-kikino-eren/css')); // 出力
});

// .min.cssを生成するタスクの設定
gulp.task("mincss", function () {
    return gulp.src('./hidari-kikino-eren/css')//上のタスクで出力したcssファイル
            .pipe(cleanCSS()) // cssを圧縮
            .pipe(rename({extname:'.min.css'})) // 名前を.min.cssにする
            .pipe(gulp.dest('./hidari-kikino-eren')) // 出力
            .pipe(notify({
                title: 'minified',
                message: new Date(),
                sound: 'Pop',
                icon: 'icon.png' // 適当なアイコンを追加してみてください
            }));
});

gulp.task("browserSyncTask", function() {
  browserSync({
    server: {
      baseDir: "./hidari-kikino-eren",
      index  : "test.html" 
    }
  });

  // srcフォルダ以下のファイルを監視
  gulp.watch("./hidari-kikino-eren/src/*.scss", function(done) {
    browserSync.reload(); // ファイルに変更があれば同期しているブラウザをリロード
    done();
  });
});


gulp.task("default", function () {
    // scssフォルダを監視し、変更があったらコンパイルする
    gulp.watch('./hidari-kikino-eren/src/*.scss',gulp.series('css', 'mincss'));
});


/*


gulp.task('sass', function () {
  gulp.src('./hidari-kikino-eren/src/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./hidari-kikino-eren/'));
});

gulp.task('watch', function(){
  gulp.watch('./hidari-kikino-eren/src/*.scss', sass);
});

gulp.task('browser-sync', function() {
  browserSync({
      server: {
           baseDir: "./hidari-kikino-eren"       
          ,index  : "test.html"      
      }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', browserSync, function () {
  gulp.watch('./hidari-kikino-eren/src/*.scss', browserReload);
});
*/