var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');

var paths = {
    css: ['stylesheets/index.scss'],
    script: ['']
};

gulp.task('mincss', function () {
    return gulp.src(paths.css)
        .pipe(sass().on('error', sass.logError))
        //.pipe(minifyCss())
        .pipe(gulp.dest('build/style'));
});

gulp.task('watch', ['mincss'], function () {
    gulp.watch('stylesheets/**/**.scss', ['mincss']);
});
