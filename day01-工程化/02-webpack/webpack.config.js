const { resolve } = require('path')
module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // filename定义打包之后的js文件的名称
    filename: './js/main.js',
    // 定义打包之后的js文件所处的目录的路径
    path: resolve(__dirname, 'build'),
    clean: true,
  },
  // 模式
  mode: 'production',
}
