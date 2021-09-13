import React, { Component } from 'react'
// 1. 下载 react-router-dom
// 2. 引入组件
// BrowserRouter 帮助我们监听浏览器地址栏路径变化

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import { HashRouter as Router, Route, Link } from 'react-router-dom'
// 完整的url: 协议://域名:端口号/路径?查询字符串#哈希值
// 完整的url: 协议://域名:端口号/#哈希值
// 完整的url: 协议://域名:端口号/#/xxx
// BrowserRouter: Link改变的就是路径
// http://localhost:3000/detail
// hashRouter: Link改变的其实是hash值
// http://localhost:3000/#/detail

// BrowserRouter和HashRouter的区别: hash改变的不是路径是哈希值.browser改变的就是真正的路径
import Home from './Home'
import Detail from './Detail'

export default class App extends Component {
  render() {
    return (
      // 一个单页面应用.BrowserRouter用一次
      <div>
        <Router>
          <div id="app">
            {/* Link最终渲染成a标签,会帮我们修改路径地址,但是不发送请求 */}
            <Link to="/home">home</Link>
            <br />
            <Link to="/detail">detail</Link>
            {/* 配置前端路由规则: 路径和视图的一一对应关系 */}
            {/* 注意: 一旦路径发生变化,所有的路由规则都会匹配一遍.即便是前面的匹配成功了,后面也还是会进行匹配 */}
            <Route path="/detail" component={Detail}></Route>
            <Route path="/home" component={Home}></Route>
          </div>
        </Router>
      </div>
    )
  }
}
