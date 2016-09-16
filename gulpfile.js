var gulp = require('gulp'),
  cleanCSS = require('gulp-clean-css');

var sourcePath = 'src/', distPath = 'dist/';

gulp.task('css-build', function () {
  return gulp.src(sourcePath + 'ohi_font.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(distPath));
});

gulp.task('watch', ['css-build'], function () {
  gulp.watch(sourcePath + '**/*.css', ['css-build']);
});
