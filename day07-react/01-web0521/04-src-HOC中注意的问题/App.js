import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
// withForm是一个函数,返回一个匿名组件
import withForm from './hoc'
const WithLogin = withForm(Login)
const WithRegister = withForm(Register)
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin test={123} index={0} i={1} demo={'demo'}></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
