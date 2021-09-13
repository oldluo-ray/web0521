import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 引入移动端适配的文件
// 如果只是要执行一个文件,文件中并没有导出任何内容,就只需要,引入路径即可
import './utils/fixed'
// 引入在线字体库文件


// 引入antd-mobile的css文件
// 当antd-mobile按需加载之后,不需要我们手动引入css样式了
// import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(<App></App>, document.getElementById('root'))
