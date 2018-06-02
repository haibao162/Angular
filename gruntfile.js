// module.exports=function(grunt){
// grunt.initConfig({
// concat:{
// dist:{
// 	src:['node/*.js'],
//     dest:'dist/main.js'
// }
// },
// uglify:{
// 	dist:{
// 		files:{'dist/main.min.js':['<%=concat.dist.dest%>']
// 	}
// }
// }
// }
// );
// grunt.loadNpmTasks("grunt-contrib-concat");
// grunt.loadNpmTasks("grunt-contrib-uglify");
// grunt.registerTask('default',['concat','uglify']);
// };
module.exports=function(grunt){
grunt.initConfig({
project:{
  path:'src/js'
},
pkg:grunt.file.readJSON('package.json'),
clean:{
	payment:{src:["build"]}
},

copy: {
      cp: {
        expand: true,
        cwd: 'src',//源文件路径
        src: '**',//源文件目录下的所有文件
        dest: 'build/',//目标文件路径，把源文件下的文件复制到该目录下
        flatten: false,//用来指定是否保持文件目录结构
        filter: 'isFile',
      }
    },

     uglify: {//压缩js文件
      compress: {
        files: [{
          expand: true,
          cwd: '<%= project.path%>', //js源文件目录
          src: '*.js', //所有js文件
          dest: 'build/js' //输出到此目录下
        }]
      }
    },

    cssmin:{
       presscss:{
"files":{'build/css/main.css':['build/css/*.css']}
       }
    },
    htmlmin:{
        presshtml:{
        	options:{
        		removeComments:true,
        		collapseWhitespace:true
        	},
        	files:[{expand:true,cwd:'src',
        	src:['*.html'],
        	dest:'build',
        	ext:'.html',
        	extDot:'first'
        }]
        }
    }


});
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default',['clean:payment','copy:cp','uglify:compress','cssmin:presscss','htmlmin:presshtml']);
//grunt.registerTask('default',['clean:payment']);
}


//http://www.cnblogs.com/wangfupeng1988/p/4561993.html