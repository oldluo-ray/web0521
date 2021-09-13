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
  withRouter,
} from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'

import './app.css'

class App extends Component {
  render() {
    return (
      <div>
        <div id="app">
          <Link to="/home">home</Link>
          <Switch>
            <Route path="/home" component={Home}></Route>
            {/* 注意: 如果定义了路由参数,但是没有传递,那么对应的这个组件就无法匹配成功,也就不会渲染了. 添加?.表示可选参数,可以不传 */}
            <Route path="/detail/:page?/:pageSize?" component={Detail}></Route>
          </Switch>
          <button
            onClick={() => {
              // 注意: 由于App组件,不是被Route组件管理的组件,所以无法获取到history对象. 如果像拿到history,location,match,那么这个组件必须是被Route管理的
              console.log(this.props)
            }}
          >
            按钮
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
