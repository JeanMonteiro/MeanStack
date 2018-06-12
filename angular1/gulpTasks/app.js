const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const inject = require('gulp-inject')
const util = require('gulp-util')
const sequence = require('run-sequence')

gulp.task('app', () => sequence('app.html', 'app.css', 'app.js', 'app.assets', 'inject'));

gulp.task('app.html', () => {
	if(util.env.production){
		return gulp.src('app/**/*.html')
			.pipe(htmlmin({ collapseWhitespace: true }))
			.pipe(gulp.dest('public'))
	}else{
		return gulp.src(['app/**/*.html']).pipe(gulp.dest('dist'));
	}
})

gulp.task('app.css', () =>  {
	if(util.env.production){
		return gulp.src('app/**/*.css')
			.pipe(uglifycss({ "uglyComments": true }))
			.pipe(concat('app.min.css'))
			.pipe(gulp.dest('public/assets/css'))
	}else{
		gulp.src(['app/**/*.css']).pipe(gulp.dest('dist'))
	}
})

gulp.task('app.js', () => {
	if(util.env.production){
		return gulp.src('app/**/*.js')
			.pipe(babel({ presets: ['env'] }))
			.pipe(uglify())
			.pipe(concat('app.min.js'))
			.pipe(gulp.dest('public/assets/js'))
	}else{
		gulp.src(['app/**/*.js']).pipe(gulp.dest('dist'));
	}
})

gulp.task('app.assets', () => {
	return gulp.src('assets/**/*.*')
		.pipe(gulp.dest('dist/assets'))
})

gulp.task('inject', () => {
	if(!util.env.production){
		gulp.src('./app/index.html')
			.pipe(inject(gulp.src(['app/**/*.js','app/**/*.css'], {read: false}),
				{
					ignorePath: 'app',
					addRootSlash: false
				}))
			.pipe(gulp.dest('./dist'))
	}
})
