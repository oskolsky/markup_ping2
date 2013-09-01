module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['application.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
   
  grunt.registerTask('default', ['sass']);

};