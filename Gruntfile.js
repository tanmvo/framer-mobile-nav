module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        port: 8000,
        livereload: 35729,
        hostname: 'localhost',
        open: {appName: 'Google Chrome'},
        base: ['./Project/']
      },
      livereload: true,
    },
    watch: {
      options: {
        livereload: true,
      },
      js: {
        files: ['./Project/app.js'],
        options: { reload: true }
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};