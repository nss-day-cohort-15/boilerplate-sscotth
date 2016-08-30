'use strict';

var PATHS = {
  css: [
    'src/**/*.css',
    '!src/lib/**/*',
  ],
  html: [
    'src/**/*.html',
    '!src/lib/**/*',
  ],
  js: [
    'Gruntfile.js',
    'src/**/*.js',
    '!src/lib/**/*',
  ],
  json: [
    '.bowerrc',
    '.htmlhintrc',
    '.jshintrc',
    '.stylelintrc',
    '*.json',
    'src/**/*.json',
    '!src/lib/**/*',
  ]
};

module.exports = function (grunt) {
  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-stylelint');

  // Plugin configuration
  grunt.initConfig({
    htmlhint: {
      src: PATHS.html,
      options: {
        htmlhintrc: '.htmlhintrc',
      },
    },
    jshint: {
      src: PATHS.js,
      options: {
        jshintrc: true,
      },
    },
    jsonlint: {
      src: PATHS.json,
    },
    stylelint: {
      src: PATHS.css,
    },
    watch: {
      options: {
        livereload: true,
      },
      js: {
        files: PATHS.js,
        tasks: ['jshint'],
      },
      html: {
        files: PATHS.html,
        tasks: ['htmlhint'],
      },
      css: {
        files: PATHS.css,
        tasks: ['stylelint'],
      },
      json: {
        files: PATHS.json,
        tasks: ['jsonlint'],
      },
    },
  });

  grunt.registerTask('lint', [
    'htmlhint',
    'jshint',
    'jsonlint',
    'stylelint',
  ]);
};
