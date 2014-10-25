var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var karma = require('gulp-karma');
var protractor = require("gulp-protractor").protractor;
//var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
//
//gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('default', ['jade', 'browser-sync', 'sass']);

var paths = {
  "view": ["./front-end/**/*.jade"],
  "styles": "./front-end/**/*.scss",
  "backend": ["./back-end/**/*.js", "app.js"],
  "front": "./front-end/**/*.js"
};

var watcher = gulp.watch([paths.view, paths.backend, paths.styles, paths.front], ['jade', 'sass']);

watcher.on('change', function (event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('sass', [], function () {
  gulp.src(paths.styles)
//    .pipe(sourcemaps.init())
//    .pipe(sass({"outputStyle":"compressed"}))
    .pipe(sass())
//    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./front-end/'))
    .pipe(reload({stream: true}))
});

gulp.task('browser-sync', function () {
  browserSync({
    proxy: "localhost:3000"
  });
});

gulp.task('jade', [], function () {
  gulp.src(paths.view)
    .pipe(jade())
    .pipe(gulp.dest('./front-end/'))
    .pipe(reload({stream: true}))
});

gulp.task('develop', function () {
  nodemon({ script: 'server.js', ext: 'js', ignore: ['./front-end/*'] })
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('test', function () {
  // Be sure to return the stream
  // NOTE: Using the fake './foobar' so as to run the files
  // listed in karma.conf.js INSTEAD of what was passed to
  // gulp.src !
  return gulp.src('./')
    .pipe(karma(
      {
        configFile: 'karma.conf.js',
        singleRun: true,
        action: 'run'
      }
    ))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log(err);
      this.emit('end'); //instead of erroring the stream, end it
    });
});

gulp.task('protractor', function () {

  gulp.src(["./test/e2e/*Spec.js"])
    .pipe(protractor({
      configFile: "test/protractor.config.js",
      args: ['--baseUrl', 'http://127.0.0.1:  3000']
    }))
    .on('error', function (e) {
      throw e
    })
});