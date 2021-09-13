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
            <Link to="/ab/c">测试</Link>
            <br />

            {/* 模糊匹配规则: 只要 pathname(浏览器地址栏的路径) 以 path(Route组件path属性的值) 开头就会匹配成功 */}
            {/*注意: pathname和path不是简单的包含关系,而是按照路径级别进行比较 */}

            {/* 详解: 
              pathname: /abc

              path: /a     no
              path: /ab     no
              path: /abc    yes


              pathname: /ab/c
              path: /ab/c   yes
              path: /a   no
              path: /ab  yes
              path: /abc  no
              path: /ab/c  yes
            
            */}

            <Route path="/ab/c" component={Home}></Route>
          </div>
        </Router>
      </div>
    )
  }
}
