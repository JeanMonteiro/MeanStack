const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const util = require('gulp-util')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', function() {
	var destPath = util.env.production ? 'public/assets/js' : 'dist/assets/js';
    return gulp.src([
      'node_modules/angular/angular.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
      'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
      'node_modules/admin-lte/plugins/jQueryUI/jquery-ui.min.js',
      'node_modules/admin-lte/plugins/datepicker/bootstrap-datepicker.js',
      'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
      'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
      'node_modules/admin-lte/dist/js/app.min.js'
  ]).pipe(uglify())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest(destPath))
})

gulp.task('deps.css',function () {
    var destPath = util.env.production ? 'public/assets/css' : 'dist/assets/css';
    return gulp.src([
      'node_modules/angular-toastr/dist/angular-toastr.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
      'node_modules/admin-lte/dist/css/AdminLTE.min.css',
      'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
      'node_modules/admin-lte/plugins/datepicker/datepicker3.css'
  ]).pipe(uglifycss({"uglyComments" : true}))
	  .pipe(concat('deps.min.css'))
	  .pipe(gulp.dest(destPath));
})

gulp.task('deps.fonts', function() {
	var destPath = util.env.production ? 'public/assets/fonts' : 'dist/assets/fonts';
  return gulp.src([
      'node_modules/font-awesome/fonts/*.*',
      'node_modules/admin-lte/bootstrap/fonts/*.*'
  ]).pipe(gulp.dest(destPath))
})
