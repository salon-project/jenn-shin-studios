var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var paths = {
  jsSource: ['./js/app.js', './js/**/*.js'],
  sassSource: ['./styles/*.scss']
}

gulp.task('sass', function(){
  return gulp.src(paths.sassSource)
  .pipe(sass())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./public'))
});

gulp.task('js', function(){
  return gulp.src(paths.jsSource)
  .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public'))
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js'])
  gulp.watch(paths.sassSource, ['sass'])
});

gulp.task('default', ['watch', 'js', 'sass']);
