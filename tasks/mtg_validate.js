/*
 * grunt-mtg-validate
 * https://github.com/Justin/grunt-mtg-validate
 *
 * Copyright (c) 2013 jtrussell
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mtg_validate', 'Grunt plugin to validate mtg deck lists.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      maindeck_count: 60
    });

    var expectedCount = options.maindeck_count;

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var decklist = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        return grunt.file.read(filepath);
      }).map(function(filecontents) {
        var lines = filecontents.split(/(?:\r?\n)/)
          , cards = [];
        lines.forEach(function(l) {
          var parts = /^- (\d+ )?([\w\s]+)$/.exec(l);
          if(parts) {
            cards.push({
              count: parts[1] || 1,
              name: parts[2]
            });
          }
        });
        return cards;
      })[0];

      var deckTotalCount = decklist.reduce(function(runningTotal, currCard) {
        return runningTotal + parseInt(currCard.count, 10);
      }, 0);

      if(deckTotalCount === expectedCount) {
        grunt.log.ok('List "' + f.dest + '" validated.');
      } else {
        grunt.fatal('List "' + f.dest + '" failed validation. Expected ' + expectedCount + ' cards and found ' + deckTotalCount);
      }
    });
  });

};
