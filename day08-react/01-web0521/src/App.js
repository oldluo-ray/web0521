import React, { Component } from 'react'
// 1. 下载 react-router-dom
// 2. 引入组件
// BrowserRouter 帮助我们监听浏览器地址栏路径变化
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'

export default class App extends Component {
  render() {
    return (
      // 一个单页面应用.BrowserRouter用一次
      <div>
        <BrowserRouter>
          <div id="app">
            {/* Link最终渲染成a标签,会帮我们修改路径地址,但是不发送请求 */}
            <Link to="/home">home</Link>
            <br />
            <Link to="/detail">detail</Link>
            {/* 配置前端路由规则: 路径和视图的一一对应关系 */}

            <Route path="/detail" component={Detail}></Route>
            <Route path="/home" component={Home}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
