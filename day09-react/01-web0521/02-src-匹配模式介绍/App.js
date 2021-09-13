import React, { Component } from 'react'
// 1. 下载 react-router-dom
// 2. 引入组件
// BrowserRouter 帮助我们监听浏览器地址栏路径变化

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div id="app">
            <Link to="/home">home</Link>
            <br />
            <Link to="/detail">detail</Link>
            {/* 模糊匹配规则: 只要 pathname(浏览器地址栏的路径) 以 path(Route组件path属性的值) 开头就会匹配成功 */}

            {/* 开启精确匹配: 给Route添加exact属性. 注意: 写了exact属性的Route是精确匹配.没写的Route还是模糊匹配 */}
            {/* 精确匹配规则: pathname和path完全一致 */}

            <Route path="/" component={Home} exact></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/home" component={Home}></Route>
          </div>
        </Router>
      </div>
    )
  }
}
