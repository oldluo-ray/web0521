const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    // 处理静态资源的路径
    assetModuleFilename: 'assets/[hash:8][ext][query]',
  },
  // 模式
  mode: 'development',
  // 加载器
  module: {
    rules: [
      // 检查js语法规范
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: 'pre', // 提前加载使用
        use: {
          // 使用eslint-loader解析
          loader: 'eslint-loader',
        },
      },
      // 处理js的兼容性问题
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      //处理less
      {
        test: /\.less$/,
        use: [
          'style-loader', // 将js文件中的样式以内嵌的形式添加到页面上
          'css-loader', // 将编译好的css添加到js文件中
          'less-loader', //将less编译成css
          // 从后往前执行
        ],
      },
      // 处理css
      {
        test: /\.css$/,
        use: [
          'style-loader', // 将js文件中的样式以内嵌的形式添加到页面上
          'css-loader', // 将编译好的css添加到js文件中
        ],
      },
      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 小于8kb以下的图片会被打包成base64格式
          },
        },
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 注意: 根据模板创建新的html文件. 源代码中的html就不要自己引入js了.会自动引入
      template: './src/public/index.html',
    }),
  ],
  devServer: {
    contentBase: './build', // 打包根路径
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
    progress: true, // 进度条
  },
}
