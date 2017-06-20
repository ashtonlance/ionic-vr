var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css');

gulp.task('default', ['minify-css']);

gulp.task('minify-css', () => {
  return gulp
    .src('./www/css/style.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./www/css/'));
});
