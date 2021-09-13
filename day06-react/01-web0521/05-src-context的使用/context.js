import React from 'react'
// 注意: 默认值生效是在不写provider的情况下
// 将context对象定义在一个单独的js文件,利用模块化,引入文件只加载过一次的原理,保证多个组件使用的context对象是同一个
export default React.createContext('一块钱')
