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
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-markdown");

	grunt.registerTask("default", ["less", "markdown"]);
};
