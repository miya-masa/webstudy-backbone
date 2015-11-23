/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp');
var path = require('path');
var merge = require('merge-stream');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var reload = browserSync.reload;

var TUTORIAL_NM = ['01', '02', '03', '04', '05', '06', '07', '08'];
var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var _ = require('underscore');

var bundle = function(folder) {
  var mainJs = './app/scripts/' + folder + '/main.js';
  var bundleSource = './' + folder + '/bundle.js';
  var sourcemapDest = './.tmp/scripts/';
  var rebundle = function() {
    return b.bundle()
      .pipe(source(bundleSource))
      .pipe(buffer())
      .pipe($.sourcemaps.init({
        loadMaps: true
      }))
      // Add transformation tasks to the pipeline here.
      .pipe($.sourcemaps.write('./'))
      .on('error', function(err) {
        $.util.log(err);
      })
      .pipe(gulp.dest('./.tmp/scripts/'))
      .pipe(reload({
        stream: true,
        once: true
      }));
  };
  // set up the browserify instance on a task basis
  var b = watchify(browserify(_.extend({}, watchify.args, {
    entries: [mainJs],
    debug: true
  })));
  b.on('update', rebundle);
  return rebundle();
};


TUTORIAL_NM.forEach(function(e) {
  var subTaskName = 'tutorial' + e;
  var bundleTaskName = 'bundle:' + subTaskName;
  console.log('Define Task TUTORIAL_NM = %s taskName = %s', e, bundleTaskName);
  gulp.task(bundleTaskName, function() {
    // サブタスク名をそのままフォルダ名とする
    return bundle(subTaskName);
  });
  // Watch files for changes & reload
  gulp.task('serve:' + subTaskName, ['styles', bundleTaskName], function() {
    browserSync({
      notify: false,
      // Customize the BrowserSync console logging prefix
      logPrefix: 'WSK',
      // Run as an https by uncommenting 'https: true'
      // Note: this uses an unsigned certificate which on first access
      //       will present a certificate warning in the browser.
      // https: true,
      server: ['.tmp', 'app']
    });

    gulp.watch(['app/**/*.html'], reload);
    gulp.watch(['app/**/*.hbs']);
    gulp.watch(['app/scripts/**/*.js'], ['jshint']);
  });
});

// Lint JavaScript
gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});


// Copy all files at the root level (app)
gulp.task('copy', function() {
  return gulp.src([
      'app/*',
      '!app/*.html',
      'node_modules/apache-server-configs/dist/.htaccess'
    ], {
      dot: true
    }).pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'copy'
    }));
});

// Copy web fonts to dist
gulp.task('fonts', function() {
  return gulp.src(['app/fonts/**'])
    .pipe($.plumber())
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({
      title: 'fonts'
    }));
});

// Compile and automatically prefix stylesheets
gulp.task('styles', function() {
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
      'node_modules/bootstrap/dist/css/**/*.min.css',
      'app/styles/**/*.css'
    ])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.changed('.tmp/styles', {
      extension: '.css'
    }))
    .pipe($.sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size({
      title: 'styles'
    }));
});

// Scan your HTML for assets & optimize them
gulp.task('html', function() {
  var assets = $.useref.assets({
    searchPath: '{.tmp,app}'
  });

  return gulp.src('app/**/*.html')
    .pipe($.plumber())
    .pipe(assets)
    // Concatenate and minify JavaScript
    .pipe($.if('*.js', $.uglify({
      preserveComments: 'some'
    })))
    // Remove any unused CSS
    // Note: if not using the Style Guide, you can delete it from
    //       the next line to only include styles your project uses.
    .pipe($.if('*.css', $.uncss({
      html: [
        'app/index.html',
        'app/styleguide.html'
      ],
      // CSS Selectors for UnCSS to ignore
      ignore: [
        /.navdrawer-container.open/,
        /.app-bar.open/
      ]
    })))
    // Concatenate and minify styles
    // In case you are still using useref build blocks
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    // Update production Style Guide paths
    .pipe($.replace('components/components.css', 'components/main.min.css'))
    // Minify any HTML
    .pipe($.if('*.html', $.minifyHtml()))
    // Output files
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'html'
    }));
});

// Clean output directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist/*', '!dist/.git'], {
  dot: true
}));


// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function() {
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'dist'
  });
});

// Build production files, the default task
gulp.task('default', ['clean'], function(cb) {
  runSequence('styles', ['jshint', 'html', 'images', 'fonts', 'copy'], cb);
});

// Run PageSpeed Insights
gulp.task('pagespeed', function(cb) {
  // Update the below URL to the public URL of your site
  pagespeed.output('example.com', {
    strategy: 'mobile',
    // By default we use the PageSpeed Insights free (no API key) tier.
    // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
    // key: 'YOUR_API_KEY'
  }, cb);
});

// Load custom tasks from the `tasks` directory
// try { require('require-dir')('tasks'); } catch (err) { console.error(err); }
