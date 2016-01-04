var gulp = require('gulp');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var open = require('gulp-open');
var traceur = require('gulp-traceur');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var browserify = require('browserify');
var source   = require('vinyl-source-stream');

gulp.task('clean', function(){
	return gulp.src('app/dist/', {read: false})
        .pipe(clean());
});

gulp.task('traceur:runtime', function(done) {
  return gulp.src(traceur.RUNTIME_PATH)
    .pipe(gulp.dest('app/dist'));
	done('ok');
});


gulp.task('traceur:transpile',['traceur:runtime'], function (callback) {
	return gulp.src([
          'app/controllers/*.js',
		  'app/app.js'
          
        ])
        .pipe(plumber())
        .pipe(traceur({ blockBinding: true}))
		.pipe(gulp.dest('app/dist'));
	callback('ok');
});


gulp.task('browserify', ['traceur:transpile'],  function (done) {
    
	return browserify({ entries: ['app/dist/app.js'] })
        .bundle()
        .pipe(source('app.bundled.js'))
        .pipe(gulp.dest('app/dist/build'));
	done('err');
});

gulp.task('uglify', ['browserify'], function(){
	gulp.src('app/dist/build/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('app/dist/build'));
});

gulp.task('watch', function(){
	// Watch any js file change and execute the scripts task
	gulp.watch(['app/app.js', 'app/controllers/*.js'], ['uglify']);
	
});

gulp.task('connect', function() {
  return connect.server({
	//root: './artifacts',
    livereload: true,
	port: 9091
  });
  open("http://localhost:9091");
});

gulp.task('default', ['uglify','connect', 'watch']);