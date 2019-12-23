let gulp = require('gulp');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let liveReload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css/'))
    .pipe(liveReload())
});

gulp.task('cssCompass', function() {
  return gulp.src('./css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css/'))
    .pipe(liveReload())
});

gulp.task('watch', function () {
  liveReload.listen();
  // series 或者 parallel
  gulp.watch('./sass/*.scss', gulp.series('sass'));
  gulp.watch('./css/**/*.css', gulp.series('cssCompass'));
});





