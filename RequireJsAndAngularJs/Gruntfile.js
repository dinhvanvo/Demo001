module.exports = function(grunt) {

  grunt.initConfig({
  
    requirejs: {
      compile: {
        options: {
          baseUrl: 'app',
          name: 'main',
          out: 'app/all.min.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

};