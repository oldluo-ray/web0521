//函数组件
// 注意: 1. 函数组件的首字母必须大小(主要体现在使用组件上,react就根据首字母是否大小写来判断要渲染的是组件还是普通的虚拟dom) 2. 函数体内必须return  3. return 后面要写一个jsx结构(组件的结构是什么,就return 什么,如果当前组件不渲染任何结构,可以直接return null. 而且jsx只能有一个根节点)
export default function App() {
  return (
    <div>
      <div>函数组件-test</div> <p>123</p>
    </div>
  )
}
