// Karma configuration
// Generated on Tue Oct 14 2014 10:08:24 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'front-end/vendor/angular/angular.js',
      'front-end/vendor/angular-mocks/angular-mocks.js',
      'front-end/vendor/angular-route/angular-route.js',
      'front-end/app.js',
      'front-end/home/home.module.js',
      'front-end/home/home.ctrl.js',
      'front-end/page1/page1.module.js',
      'front-end/page1/page1.ctrl.js',
      'front-end/users/users.module.js',
      'front-end/users/users.ctrl.js',
      'test/spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'vendor/bootstrap/**/*.js',
      'vendor/jquery/**/*.js',
//      'vendor/requirejs/**/*.js',
      'vendor/**/*.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
