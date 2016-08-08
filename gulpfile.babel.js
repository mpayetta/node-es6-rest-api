import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';
import babelCompiler from 'babel-core/register';

// Load the gulp plugins into the `plugins` variable
const plugins = loadPlugins();

const paths = {
  js: ['./**/*.js', '!dist/**', '!node_modules/**'],
  tests: './server/test/**/*.test.js'
};

// Compile all Babel Javascript into ES5 and put it into the dist dir
gulp.task('babel', () => {
  return gulp.src(paths.js, { base: '.' })
    .pipe(plugins.babel())
    .pipe(gulp.dest('dist'));
});

// Start server with restart on file change events
gulp.task('nodemon', ['babel'], () =>
  plugins.nodemon({
    script: path.join('dist', 'index.js'),
    ext: 'js',
    ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
    tasks: ['babel']
  })
);

// Clean up dist directory
gulp.task('clean', () => {
  return del('dist/**');
});

// Set environment variables
gulp.task('set-env', () => {
  plugins.env({
    vars: {
      NODE_ENV: 'test'
    }
  });
});

// triggers mocha tests
gulp.task('test', ['set-env'], () => {
  let exitCode = 0;
  
  return gulp.src([paths.tests], { read: false })
    .pipe(plugins.plumber())
    .pipe(plugins.mocha({
      reporter:'spec',
      ui: 'bdd',
      timeout: 2000,
      compilers: {
        js: babelCompiler
      }
    }))
    .once('error', (err) => {
      console.log(err);
      exitCode = 1;
    })
    .once('end', () => {
      process.exit(exitCode);
    });
});

gulp.task('mocha', ['clean'], () => {
  return runSequence('babel', 'test');
});

gulp.task('apidoc', (done) => {
  plugins.apidoc({
    src: 'server/routes/',
    dest: 'docs/',
    config: ''
  }, done);
});