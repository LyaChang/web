var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync').create();
var minimist = require('minimist'); // 用來讀取指令轉成變數


var envOptions = {
  string: 'env',
  default: { env: 'develop' }
};

var options = minimist(process.argv.slice(2), envOptions);

// 刪掉上線後不要的資料夾
gulp.task('clean', () => {
  return gulp.src(['./public', './.tmp','./.publish'], { read: false }) // 選項讀取：false阻止gulp讀取文件的內容，使此任務更快。
    .pipe($.clean());
});

gulp.task('jade', function() {
   
    gulp.src('./source/*.jade')
      .pipe($.plumber()) //程式發生錯誤不會停止
      .pipe($.data(function(){
        var menu = require('./source/data/menu.json');
        var source = {
          'menu': menu
        };
        return source; 
      }))
      .pipe($.jade({
         pretty: true  //輸出的 HTML會有原本的格式，不會被壓縮
      }))
      .pipe(gulp.dest('./public/'))
      .pipe(browserSync.stream()); //輸出完html後自動做重新整理
  });

  gulp.task('babel', () =>{
    return gulp.src('./source/js/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['@babel/env']
        }))
         .pipe($.concat('all.js'))
         .pipe($.if(options.env === 'production', $.uglify({
           compress:{
             drop_console: true
           }
         }))) //壓縮js
         .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.stream()); //輸出完js後自動做重新整理
      });

  gulp.task('sass', function () {
    var plugins = [
      autoprefixer({browsers: ['last 1 version','> 5%','ie 8']})
  ];
    return gulp.src(['./source/stylesheets/**/*.scss','./source/stylesheets/**/*.sass'])
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass({
           includePaths:['./node_modules/bootstrap/scss']
       }).on('error', $.sass.logError))
      //編譯css
      .pipe($.postcss(plugins))
      .pipe($.if(options.env === 'production', $.cleanCss()))//壓縮css
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('./public/css'))
      .pipe(browserSync.stream()); //輸出完sass後自動做重新整理
  });

  gulp.task('concatCSS', function() {
    return gulp.src('./source/stylesheets/**/*.css')
        .pipe($.concat('plugin.css'))
        .pipe(gulp.dest('./public/css'));
  });

  gulp.task('image', () =>
    gulp.src('src/images/*')
        .pipe($.imagemin())
        .pipe(gulp.dest('source/images'))
);

  gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./.tmp/vendors'))
  });
  
  gulp.task('vendorJs',['bower'], function() {
    return gulp.src(['./.tmp/vendors/**/**.js','./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js','./source/js/plugins/*.js','./node_modules/gsap/src/minified/TweenMax.min.js'])
        .pipe($.concat('vendors.js'))
        .pipe($.if(options.env === 'production',$.uglify))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js'))
  });

  // Static server
  
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./public" //指定輸出檔的資料夾位置
      }
      //,reloadDebounce: 2000 //至少2秒內只更新一次，這樣他就不會一直重新整理吃資源
  });
});

//輸出圖片
gulp.task('image-min', () =>
    gulp.src('./source/images/*')
        .pipe($.if(options.env === 'production',$.imagemin())) // 壓縮圖片
        .pipe(gulp.dest('./public/images'))
);

  gulp.task('watch', function () {
    gulp.watch(['./source/stylesheets/**/*.scss','./source/stylesheets/**/*.sass'], ['sass']);
    gulp.watch('./source/**/*.jade', ['jade']);
    gulp.watch('./source/js/**/*.js', ['babel']);
  });


  gulp.task('deploy', function() {
    return gulp.src('./public/**/*') //要發布的資料夾
      .pipe($.ghPages());
  });


  gulp.task('default',['jade','concatCSS','sass','babel','vendorJs','image-min','browser-sync','watch']);