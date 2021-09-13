// gilfile.js会运行在nodejs平台上.所以遵循commonjs语法

const gulp = require('gulp')
// 引入js代码检查的插件
const jshint = require('gulp-jshint')
// 将es6模块化语法转成commonjs模块化语法
const babel = require('gulp-babel')
// 将commonjs转成浏览器认识的代码的插件
const browserify = require('gulp-browserify')
// 给文件重命名的插件
const rename = require('gulp-rename')
// 压缩js代码
const uglify = require('gulp-uglify')
// 将less编译成css
const less = require('gulp-less')
// 处理css的兼容的问题
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }) // 所有内核的浏览器往前兼容两个版本
const concat = require('gulp-concat')
// 压缩css
const cssmin = require('gulp-cssmin')
// 压缩html
const htmlmin = require('gulp-htmlmin')
// 自动编译刷新的插件
const livereload = require('gulp-livereload')
const connect = require('gulp-connect')
const opn = require('opn')

// 定义任务
// gulp.task('自定义的任务名', 回调函数)
// 注意: 如果任务名叫default. 执行任务的时候,可以忽略default
// gulp.task('default', async () => {
//   console.log('123')
// })

gulp.task('jshint', function () {
  // 将你的任务的任务代码放在这
  return gulp
    .src('./src/js/*.js') // 读取js下面所有的js文件,得到一个流对象
    .pipe(
      // 利用jshint插件,去调用真正的jshint这个包去帮助我们检查js代码是否符合规范
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true, // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default')) // gulp插件中查看
    .pipe(livereload())
})
gulp.task('babel', () =>
  gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        //进行语法转换
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest('build/js')) //输出到指定目录
    .pipe(livereload())
)
gulp.task('browserify', function () {
  return gulp
    .src('./build/js/index.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
    .pipe(livereload())
})

gulp.task('uglify', function () {
  return gulp
    .src('build/js/built.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

gulp.task('less', function () {
  return gulp
    .src('./src/less/*.less')
    .pipe(
      less({
        plugins: [autoprefix], //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

gulp.task('concat', function () {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

gulp.task('cssmin', function () {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true, //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

//自动执行任务，编译代码
gulp.task('watch', function () {
  //1. 在所有可能要执行任务后面加上 .pipe(livereload());
  //2. 配置watch任务
  livereload.listen()
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true, // 自动刷新
  })
  //自动打开浏览器
  opn('http://localhost:3000/index.html')
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']))
  gulp.watch(
    './src/js/*.js',
    gulp.series(['jshint', 'babel', 'browserify', 'uglify'])
  )
  gulp.watch('./src/index.html', gulp.series('htmlmin'))
})

gulp.task(
  'default',
  gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'
  )
)
