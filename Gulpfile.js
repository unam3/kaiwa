var browserify = require('browserify');
var fs = require('fs');
var concatCss = require('gulp-concat-css');
var config = require('./dev_config');
var jade = require('gulp-jade');
var gulp = require('gulp');
var templatizer = require('templatizer');

gulp.task('compile', ['resources', 'client']);
gulp.task('resources', function () {
    return gulp.src('./src/resources/**')
        .pipe(gulp.dest('./public'));
});
gulp.task('client', ['jade-templates', 'jade-views'], function (cb) {
    return browserify({
        entries: [ './src/js/app.js' ]
    }).bundle().pipe(fs.createWriteStream('./public/js/app.js'));
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
