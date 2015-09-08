var browserify = require('browserify');
var fs = require('fs');
var gulp = require('gulp');
var templatizer = require('templatizer');

gulp.task('compile', ['resources', 'client']);
gulp.task('resources', function () {
    return gulp.src('./src/resources/**')
        .pipe(gulp.dest('./public'));
});
gulp.task('client', ['jade'], function (cb) {
    return browserify({
        entries: [ './src/js/app.js' ]
    }).bundle().pipe(fs.createWriteStream('./public/js/app.js'));
});
gulp.task('jade', function (cb) {
    templatizer('./src/jade/templates', './src/js/templates.js', cb);
});
