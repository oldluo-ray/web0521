import React from 'react'
// 问题: 目前引入组件的方式,会一股脑将所有的组件,加载到内存中.但是有可能很多组件,都并不会被访问,浪费内存
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// 解决: 我们要懒加载组件
// import() 实现代码分割  React.lazy实现组件的懒加载
// 注意: 一般组件的懒加载都是配合着前端路由实现的
// 如果一上来不需要渲染的组件,就不会被加载了
const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
const Country = React.lazy(() => import('../pages/Country'))
const verifyPhone = React.lazy(() => import('../containers/WithVp'))
const VerifyCode = React.lazy(() => import('../containers/WithVc'))
const VerifyPassword = React.lazy(() => import('../containers/WithVpass'))
// 路由表
export default [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    //如果有二级路由,就写children
    // children: [
    //     {}
    // ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/verifyPhone',
    component: verifyPhone,
  },
  {
    path: '/verifyCode',
    component: VerifyCode,
  },
  {
    path: '/verifyPassword',
    component: VerifyPassword,
  },
  {
    path: '/country',
    component: Country,
  },
]
