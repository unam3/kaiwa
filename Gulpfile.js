var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var fs = require('fs');
var gulp = require('gulp');
var jade = require('gulp-jade');
var merge = require('merge-stream');
var source = require('vinyl-source-stream');
var templatizer = require('templatizer');

gulp.task('compile', ['resources', 'client', 'config']);
gulp.task('resources', function () {
    return gulp.src('./src/resources/**')
        .pipe(gulp.dest('./public'));
});
gulp.task('client', ['jade-templates', 'jade-views'], function () {
    var stream = browserify({
        entries: [ './src/js/app.js' ]
    }).bundle();

    return merge(gulp.src([
            './src/js/libraries/jquery.js',
            './src/js/libraries/ui.js',
            './src/js/libraries/resampler.js',
            './src/js/libraries/IndexedDBShim.min.js',
            './src/js/libraries/sugar-1.2.1-dates.js',
            './src/js/libraries/jquery.oembed.js',
            './src/js/libraries/jquery-impromptu.js'
        ]), stream.pipe(source('app.js')).pipe(buffer()))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/js'));
});
gulp.task('config', function (cb) {
    var config = require('./dev_config');
    fs.writeFile(
        './public/config.js',
        'var SERVER_CONFIG = ' + JSON.stringify(config.server) + ';',
        function (error) {
            cb(error);
        });
});
gulp.task('jade-templates', function (cb) {
    templatizer('./src/jade/templates', './src/js/templates.js', cb);
});
gulp.task('jade-views', ['jade-views-login', 'css'], function () {
    return gulp.src([
        './src/jade/views/error.jade',
        './src/jade/views/index.jade',
        './src/jade/views/logout.jade',
        './src/jade/views/oauthLogin.jade'
    ]).pipe(jade()).pipe(gulp.dest('./public/'));
});
gulp.task('jade-views-login', ['css'], function () {
    var config = require('./dev_config');
    return gulp.src('./src/jade/views/login.jade')
        .pipe(jade({
            locals: {
                config: config.server
            }
        }))
        .pipe(gulp.dest('./public/'));
});
gulp.task('css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(concatCss('app.css'))
        .pipe(gulp.dest('./public/css/'));
});
