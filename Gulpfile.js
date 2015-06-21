var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    server = require( 'gulp-develop-server'),
    watch = require('gulp-watch');

gulp.task('scripts', function () {

  gulp.src(['app/main.js'])
    .pipe(browserify({
        debug: true,
        transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('./public/'));

});

gulp.task('watch', function () {
  gulp.watch('app/**/*.js' , ['scripts']);
});


gulp.task( 'serve', function() {
  server.listen({path: './server.js'});
});

gulp.task('default', ['scripts','serve','watch']);

