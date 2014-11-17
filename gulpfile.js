/**
 * Gulp tasks.
 */
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Define 'clean' task.
gulp.task('clean', function(done) {
    return del(['dist/*'], done);
});

// Browserify task.
gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Copy task to get other files into dist.
gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

// Define default task.
gulp.task('default', ['clean', 'browserify', 'copy']);

// Define the watch task.
gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
