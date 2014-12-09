module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			dev: {
				options: {
					compress: false,
					sourceMap: true
				},
				files: [{
					expand: true,
					src: [
						"**/*.less",
						"!node_modules/**/*.less",
						"!bower_components/**/*.less"
					],
					dest: "build/",
					ext: ".less.css"
				}]
			}
		},
		copy: {
			components: {
				files: [{
					expand: true,
					src: [
						"**/readme.md",
						"!bower_components/**/*",
						"!node_modules/**/*",
						"!style-guide/**/*"
					],
					dest: "./style-guide/contents/components/"
				}]
			}
		},
		metalsmith: {
			options: {
				metadata: {},
				plugins: {
					"metalsmith-collections": {
						components: "components/**/*.md"
					},
					"metalsmith-markdown": {},
					"metalsmith-templates": {
						engine: "handlebars",
						directory: "./style-guide/templates"
					},
					"metalsmith-drafts": {}
				}
			},
			styleguide: {
				src: "style-guide/contents",
				dest: "build"
			}
		},
		'gh-pages': {
			options: {
				base: "build"
			},
			src: ["**"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-metalsmith");
	grunt.loadNpmTasks("grunt-gh-pages");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", ["copy", "metalsmith", "less"]);
	grunt.registerTask("publish", ["copy", "metalsmith", "less", "gh-pages"]);
};
