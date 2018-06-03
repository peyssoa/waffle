var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");

gulp.task('sass', function(){
    return gulp.src('src/scss/app.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('src/css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(cssnano())
      .pipe(gulp.dest('dist/css/'));
});



gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['sass']); 
    // Other watchers
});

gulp.task('default', ['sass']);