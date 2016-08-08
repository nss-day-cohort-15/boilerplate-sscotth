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
        src: ['Gruntfile.js', './src/**/*.js', '!./src/lib/**/*'],
        options: {
          jshintrc: true
        }
      }
    },
    stylelint: {
      all: {
        src: ['./src/**/*.css', '!./src/lib/**/*']
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['Gruntfile.js', './src/**/*.js', '!./src/lib/**/*'],
        tasks: ['jshint']
      },
      html: {
        files: ['./src/**/*.html', '!./src/lib/**/*'],
        tasks: ['htmlhint']
      },
      css: {
        files: ['./src/**/*.css', '!./src/lib/**/*'],
        tasks: ['stylelint']
      },
      json: {
        files: ['./src/**/*.json', '!./src/lib/**/*'],
        tasks: ['jsonlint']
      }
    },
    jsonlint: {
      all: {
        src: ['./src/**/*.json', '!./src/lib/**/*'],
        options: {
          format: true,
          indent: 2
        }
      }
    },
    htmlhint: {
      all: {
        src: ['./src/**/*.html', '!./src/lib/**/*'],
        options: {
          htmlhintrc: '.htmlhintrc'
        }
      }
    }
  });
};
