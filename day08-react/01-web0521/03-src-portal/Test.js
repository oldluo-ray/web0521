import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 需求: Test组件的结构需要渲染到指定的位置上
export default class Test extends Component {
  constructor() {
    super()
    // 1.创建存储当前组件结构的容器
    this.container = document.createElement('div')
  }
  render() {
    //2. 将当前组件的结构,添加到指定的容器中
    return ReactDOM.createPortal(<div>test组件</div>, this.container)
  }
  componentDidMount() {
    //3. 将容器添加到指定位置
    document.querySelector('#container').appendChild(this.container)
  }

  componentWillUnmount() {
    //4. 组件卸载的时候,将容器删除掉
    document.querySelector('#container').removeChild(this.container)
  }
}
