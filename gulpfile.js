var gulp=require('gulp');
gulp.task('task1',function(){
	console.log('hello,world');});//简单的试试



var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function () {    // 这里的watch，是自定义的
    var server = livereload();
    
    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch('app/**/*.*', function (file) {
        server.changed(file.path);
    });
});//刷新的代码



var gulp=require ('gulp'),
    less=require ('gulp-less');
    gulp.task('testless',function(){
    	gulp.src(['src/less/index.less','src/less/detail.less','src/less/one.less'])//以数组的形式来输入多个文件
    
    .pipe(less())
    .pipe(gulp.dest('src/css'));//将会生成css文件
});

 var gulp=require('gulp'),
 concat=require('gulp-concat'),
 rename=require('gulp-rename'),
 jshint=require('gulp-jshint'),
 uglify=require('gulp-uglify');
 var $=require('gulp-load-plugins')();
 gulp.task('es6',function(){
 	return gulp.src('src/es6js/*.js')
 	.pipe($.plumber())
 	.pipe($.babel({
 		presets:['es2017']
 	}))
 	.pipe(gulp.dest('dist/'));
 });
