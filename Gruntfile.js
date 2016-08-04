'use strict';

module.exports = function (grunt) {
  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-stylelint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-htmlhint');

  // Plugin configuration
  grunt.initConfig({
    jshint: {
      all: {
        src: ['./**/*.js', '!./node_modules/**/*', '!./src/**/*', '!./Gruntfile.js'],
        options: {
          jshintrc: true
        }
      }
    },
    stylelint: {
      all: {
        src: ['./**/*.css', '!./node_modules/**/*', '!./src/**/*']
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['./**/*.js', '!./node_modules/**/*', '!./src/**/*'],
        tasks: ['jshint']
      },
      html: {
        files: ['./**/*.html', '!./node_modules/**/*', '!./src/**/*'],
        tasks: ['htmlhint']
      },
      css: {
        files: ['./**/*.css', '!./node_modules/**/*', '!./src/**/*'],
        tasks: ['stylelint']
      },
      json: {
        files: ['./**/*.json', '!./node_modules/**/*', '!./src/**/*'],
        tasks: ['jsonlint']
      }
    },
    jsonlint: {
      all: {
        src: ['./**/*.json', '!./node_modules/**/*', '!./src/**/*'],
        options: {
          format: true,
          indent: 2
        }
      }
    },
    htmlhint: {
      all: {
        src: ['./**/*.html', '!./node_modules/**/*', '!./src/**/*'],
        options: {
          htmlhintrc: '.htmlhintrc'
        }
      }
    }
  });
};
