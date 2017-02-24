var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
 gulp.task('default', function(){
	console.log("hurray")
});

gulp.task('style', function(){
	return gulp.src('./app/styles/style.css')
		.pipe(postcss([autoprefixer]))
		.on('error', function(errorMsg){
			console.log(errorMsg.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/style'));
});

// gulp.task('styles', function(){
// 	return gulp.src('./app/styles/styles.css')
// 		.pipe(postcss([cssImport, cssvars,cssnested, autoprefixer]))
// 		.pipe(gulp.dest('./app/temp/styles'));
// });

gulp.task('watch', function(){

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/styles/*.css', function(){
		browserSync.reload();

	})
	.pipe(browserSync.stream());
});

// gulp.task('injectCSS', ['style'], function(){
// 	gulp.src('../app/styles/style.css')
// 	.pipe(browserSync.stream());
// })