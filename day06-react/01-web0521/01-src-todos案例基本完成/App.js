import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  // list不是App组件要使用数据,是Header,List,Footer,Item组件中要使用的数据,一般我们会将多个组件中要共同使用的数据,写在最近的公共父组件中. 这种方式叫状态提升
  state = {
    list: [
      { id: 1, todoName: '吃饭', isDone: true },
      { id: 2, todoName: '睡觉', isDone: false },
    ],
  }
  // 子传父: 1. 父组件定义函数 2. 将函数通过props传给子组件 3. 子组件调用父组件中定义的函数, 将数据当做实参,传递给父组件
  addTodo = (todoName) => {
    // console.log(todoName)
    // 根据任务名,创建任务对象
    let todo = {
      isDone: false,
      todoName,
      id: Date.now(),
    }
    // 将任务对象,添加到list中
    // 注意: 下面的代码是直接往list中添加数据. 这种形式,可以完成当前的功能,但是会有坑!!!,并不是推荐的方式. 后面的课程中会告诉他们正确的修改数据的方式
    this.state.list.push(todo)
    this.setState({
      list: this.state.list,
    })
  }

  updateTodo = (id) => {
    // console.log(id)
    // 注意: 下面的代码是直接修改状态里面的数据. 这种形式,可以完成当前的功能,但是会有坑!!!,并不是推荐的方式. 后面的课程中会告诉他们正确的修改数据的方式
    this.state.list.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    this.setState({
      list: this.state.list,
    })
  }

  deleteTodo = (id) => {
    // console.log(id);
    const {list} = this.state 
    const newList = list.filter((item)=>item.id !== id)
    this.setState({
      list: newList
    })
    
  }

  allCheckHandle = () => {
    // 1. 判断数据中是否都选中
    const {list} = this.state 
    const result = list.every(item=>item.isDone)
    console.log(result);

    // 2. 根据结果给每一个复选框重新赋值
      list.forEach(item=>{
        item.isDone = !result
      })

      this.setState({
        list
      })

   

  }

  delDoneHandle = () => {
    const {list} = this.state 
    const newList = list.filter(item=>!item.isDone)
    this.setState({
      list:newList
    })
  }
  render() {
    const { list } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
           {list.length ? <div>
            {/* 将list组件中需要的数据,通过props传递过去 */}
            <List list={list} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
            <Footer list={list} allCheckHandle={this.allCheckHandle} delDoneHandle={this.delDoneHandle}></Footer>
          </div> : <h1>恭喜你,暂无没有任务</h1>}
        </div>
      </div>
    )
  }
}
