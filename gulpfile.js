var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['jade', 'browser-sync', 'sass']);

var paths = {
  "view": ["./front-end/**/*.jade"],
  "styles": "./front-end/**/*.scss",
  "backend": ["./back-end/**/*.js", "app.js"],
  "front": "./front-end/**/*.js"
};

var watcher = gulp.watch([paths.view, paths.backend, paths.styles, paths.front], ['jade', 'sass']);

watcher.on('change', function(event) {
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

gulp.task('browser-sync', function() {
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