var gulp = require('gulp');

gulp.task('build', function () {
    var postcss = require('gulp-postcss');
    return gulp.src('./css/app.css')
        .pipe(postcss([]))
        .pipe(gulp.dest('./dist'));
});