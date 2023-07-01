module.exports = function(grunt) {
  // Load the required npm packages
  var shell = require('shelljs');

  grunt.registerTask('playwright', 'A Grunt task to run Playwright tests', function() {
    // Access the options and target data
    var options = this.options();
    var target = this.target;

    // Log the options and target
    console.log('Options:', options);
    console.log('Target:', target);

    // Implement the logic to run Playwright tests
    var command = `npx playwright test ${options.file} --browser=${options.browser}`;

    // Execute the Playwright command using shell.exec
    var result = shell.exec(command, { silent: true });

    // Check the result and handle errors if needed
    if (result.code !== 0) {
      grunt.log.error('Playwright tests failed.');
      return false;
    }

    // Complete the task
    grunt.log.writeln('Playwright task completed.');
  });
};
