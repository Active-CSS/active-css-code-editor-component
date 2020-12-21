// Active CSS code editor generator.
// Basically just minify the CSS as there isn't an ACSS minifier yet.
(function () {
   'use strict';

	module.exports = function(grunt) {
		grunt.initConfig({
			// Custom variable.
			fileVersion: '1-0-0',

			pkg: grunt.file.readJSON('package.json'),

			cssmin: {
				target: {
					src: [ 'src/activecss-editor.css' ],
					dest: 'dist/v-<%= fileVersion %>/activecss-editor.min.css'
				}
			},

			copy: {
				files: {
					expand: true,
					cwd: 'src',
					src: ['**'],
					dest: 'dist/v-<%= fileVersion %>/'
				}
			}
		});

		// load modules.
		grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-copy');

		// Run tasks.
		grunt.registerTask('default', [ 'cssmin', 'copy' ]);
//		grunt.registerTask('default', [ 'cssmin' ]);
	};

}());
