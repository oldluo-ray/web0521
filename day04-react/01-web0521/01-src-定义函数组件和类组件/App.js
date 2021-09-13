//函数组件
// 注意: 1. 函数组件的首字母必须大小(主要体现在使用组件上,react就根据首字母是否大小写来判断要渲染的是组件还是普通的虚拟dom) 2. 函数体内必须return  3. return 后面要写一个jsx结构(组件的结构是什么,就return 什么,如果当前组件不渲染任何结构,可以直接return null. 而且jsx只能有一个根节点)
// export default function App() {
//   return (
//     <div>
//       <div>函数组件-test</div> <p>123</p>
//     </div>
//   )
// }

// 类组件 
// 1. 类组件必须要继承React对象的Component组件(类组件的功能,都是从Component组件上继承下来的)
// 2. 类组件中至少要写一个render函数, render函数用来渲染jsx结构
// 3.  render函数中,必须写一个return. 后面跟着写jsx 或 null
import React from 'react'
export default class App extends React.Component {
    render(){
      return <div>app</div>
    }
}
