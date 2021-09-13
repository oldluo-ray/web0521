/*

    项目构建的目的: 为了将源代码编译成可以上线的代码.并且在开发过程中,可以自动编译刷新

    使用项目构建工具: 

        gulp: 
            配置文件的位置和文件名: 
                位置: 项目根目录
                文件名: gulpfile.js

            定义任务: 
                npm i gulp -D 
                const gulp = require('gulp')
                gulp.task('任务名',回调函数) 任务名是default的执行 执行任务 gulp
                如果执行其他任务: gulp 任务名

        webpack

            五大核心概念: 
                入口  entry 用来定义入口文件的路径
                出口   output 定义打包之后的代码的路径
                模式  决定了当前是处于开发还是生产环境
                加载器  webpack默认只能处理js和json.处理不了其他类型的文件. 所以要使用加载器
                插件  加载器也完成不了的工作,交给插件


            配置文件的位置和文件名: 
                位置: 项目根目录
                文件名: webpack.config.js


            module.exports = {
                entry: '',
                output: {
                    filename: 文件名,
                    path: 打包后文件输出的路径
                },
                mode: development/production
            }









*/