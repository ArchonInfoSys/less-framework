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
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");

	grunt.registerTask("default", ["less"]);
};
