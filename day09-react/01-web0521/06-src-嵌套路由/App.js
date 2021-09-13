import React, { Component } from 'react'
// 1. 下载 react-router-dom
// 2. 引入组件
// BrowserRouter 帮助我们监听浏览器地址栏路径变化

import { Route, Link, Switch, withRouter } from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'

import './app.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="app">
          <Link to="/home">home</Link>
          <Link to="/detail">detail</Link>
          {/* /detail/item1 */}
          <Route path="/home" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </div>
      </div>
    )
  }
}
