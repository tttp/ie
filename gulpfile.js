var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");


var paths = {
  css: [
  ],
  scripts: [
    'node_modules/d3/build/d3.js',
    'node_modules/d3/d3.js',
    'node_modules/topojson/dist/topojson.js',
    'node_modules/d3-tip/index.js',

  ]

};
gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(concat('all.css'))
    .pipe(minify({
      level: {
        1: {
          specialComments: 0
        }
      }
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
  // with sourcemaps all the way down 
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
});


gulp.task('default', ['js']);
