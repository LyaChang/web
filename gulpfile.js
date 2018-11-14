var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync').create();



gulp.task('jade', function() {
    // var YOUR_LOCALS = {};
   
    gulp.src('./source/*.jade')
      .pipe($.plumber()) //程式發生錯誤不會停止
      .pipe($.jade({
         pretty: true  //輸出的 HTML會有原本的格式，不會被壓縮
      }))
      .pipe(gulp.dest('./public/'))
      .pipe(browserSync.stream()); //輸出完html後自動做重新整理
  });

  gulp.task('babel', () =>{
    return gulp.src('./source/js/**/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['@babel/env']
        }))
         .pipe($.concat('all.js'))
         .pipe($.uglify({
           compress:{
             drop_console: true
           }
         })) //壓縮js
         .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.stream()); //輸出完js後自動做重新整理
      });

  gulp.task('sass', function () {
    var plugins = [
      autoprefixer({browsers: ['last 1 version','> 5%','ie 8']})
  ];
    return gulp.src('./source/scss/**/*.scss')
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass({
           includePaths:['./node_modules/bootstrap/scss']
       }).on('error', $.sass.logError))
      //編譯css
      .pipe($.postcss(plugins))
      //.pipe($.cleanCss()) //壓縮css
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('./public/css'))
      .pipe(browserSync.stream()); //輸出完sass後自動做重新整理
  });

  gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./.tmp/vendors'))
  });
  
  gulp.task('vendorJs',['bower'], function() {
    return gulp.src('./.tmp/vendors/**/**.js')
        .pipe($.concat('vendors.js'))
        .pipe(gulp.dest('./public/js'))
  });

  // Static server
  
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./public" //指定輸出檔的資料夾位置
      }
  });
});

  gulp.task('watch', function () {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
    gulp.watch('./source/**/*.jade', ['jade']);
    gulp.watch('./source/js/**/*.js', ['babel']);
  });


  gulp.task('deploy', function() {
    return gulp.src('./public/**/*') //要發布的資料夾
      .pipe($.ghPages());
  });


  gulp.task('default',['jade','sass','babel','vendorJs','browser-sync','watch']);
  // gulp.task('default',['jade','sass','babel']);