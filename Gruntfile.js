module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "watch": {
      "files": 'static/**',
      "tasks": [],
      "options": {
        "livereload": true,
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
