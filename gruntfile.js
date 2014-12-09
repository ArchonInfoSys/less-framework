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
					src: ["*.less"],
					dest: "build/",
					ext: ".less.css"
				}]
			}
		},
		markdown: {
			options: {
				template: "style-guide/layout.html"
			},
			dev: {
				src: "style-guide/index.md",
				dest: "build/index.html"
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
	grunt.loadNpmTasks("grunt-markdown");
	grunt.loadNpmTasks("grunt-gh-pages");

	grunt.registerTask("default", ["less", "markdown", "gh-pages"]);
};
