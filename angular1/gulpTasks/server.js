const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const util = require('gulp-util')

gulp.task('watch', () => {
  watch('app/**/*.html', () => gulp.start(['app.html','inject']))
 watch('app/**/*.css', () => gulp.start('app.css','inject'))
 watch('app/**/*.js', () => gulp.start('app.js','inject'))
 watch('assets/**/*.*', () => gulp.start('app.assets','inject'))
})

gulp.task('server', ['watch'], function() {
	if (util.env.production) {
		return gulp.src('public').pipe(webserver({
			livereload: true,
			port: 4000,
			open: true
		}))
	} else {
		return gulp.src('dist').pipe(webserver({
			livereload: true,
			port: 4000,
			open: true
		}))
	}
})
