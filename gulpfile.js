

let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');//自动修复插件

// gulp.task('default', function(done) {
//   console.log("hello");// 将你的默认的任务代码放在这
//   gulp.series('stream', 'styles');
//   done();
// });
// gulp.task('default', ['stream', 'styles']);
gulp.task('default', ['sass111']);

// gulp.task('stream', function () {
//   // Endless stream mode
//   gulp.watch('css/*.css', ['styles'])//监测scss文件的改动
// });
// gulp.task('styles', function() {
//   gulp.src('sass/*.scss')
//     .pipe(sass())//把scss转为css
//     .pipe(sass().on('error', sass.logError))//插入sass日志错误函数，更改默认行为，以便统一修改
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions']
//     }))
//     .pipe(gulp.dest('./css'));//把转好的css文件存入css文件夹
// });

gulp.task('sass111', function(){
  return gulp.src('./scss/test.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
});



