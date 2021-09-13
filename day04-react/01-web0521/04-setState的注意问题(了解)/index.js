import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 组件的使用:
// 将组件写成标签的形式,就是在使用组件 <App></App>(底层,其实就是new App())
// 使用组件,可以写成单标签,也可以写成双标签
// ReactDOM.render(<App></App>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))
