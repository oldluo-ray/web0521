import React, { Component } from 'react'
// 1. 下载 react-router-dom
// 2. 引入组件
// BrowserRouter 帮助我们监听浏览器地址栏路径变化

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'

import './app.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div id="app">
            {/* 跟Link作用一样,只是会自动添加类名实现高亮. 默认添加的类名是active. 使用activeClassName可以自定义类名 */}
            <NavLink to="/home" activeClassName="selected">
              首页
            </NavLink>
            <br />
            <NavLink to="/detail" activeClassName="selected">
              详情
            </NavLink>
            <NavLink to="/a" activeClassName="selected">
              test
            </NavLink>
            {/* Switch组件,专门用来包裹Route组件,被Switch包裹的Route,如果前面的已经匹配成功,后面的就不会再匹配 */}
            {/* <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/detail" component={Detail}></Route>
              <Route path="/" component={Home}></Route>
            </Switch> */}
            {/* <Route path="/home" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route> */}

            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/detail" component={Detail}></Route>
              <Route path="/" component={Home}></Route>
              {/* Redirect的form属性要生效,就必须包裹在Switch组件中 */}
              <Redirect from="/a" to="/home"></Redirect>
              {/* 如果没有写from,只要Redirect加载了,就会立刻重定向 */}
              {/* <Redirect to="/home"></Redirect> */}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
