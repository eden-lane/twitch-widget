var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    less = require('gulp-less');

gulp.task('scripts', function () {
  return gulp.src('src/tw-widget.js')
      .pipe(uglify())
      .pipe(rename('tw-widget.min.js'))
      .pipe(gulp.dest('build'));
});

gulp.task('styles', function (){
  return gulp.src('src/tw-widget.less')
      .pipe(less())
      .pipe(gulp.dest('build'));
});

gulp.task('default', ['scripts', 'styles']);
