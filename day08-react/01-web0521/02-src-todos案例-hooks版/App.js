import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default function App() {
  // 从缓存中读取数据
  const todos = JSON.parse(localStorage.getItem('todos')) || []
  const [list, setList] = useState(todos)
  localStorage.setItem('todos', JSON.stringify(list))
  useEffect(() => {
    const addToken = PubSub.subscribe('add', (msg, todoName) => {
      console.log('add', list)
      // 根据任务名创建任务对象
      const todo = {
        id: Date.now(),
        todoName,
        isDone: false,
      }
      const newList = [...list]
      newList.push(todo)
      setList(newList)
    })
    const updateToken = PubSub.subscribe('update', (msg, id) => {
      const newList = [...list]
      newList.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })
      setList(newList)
    })
    const deleteToken = PubSub.subscribe('delete', (msg, id) => {
      const newList = list.filter((item) => item.id !== id)
      setList(newList)
    })
    const checkallToken = PubSub.subscribe('checkall', (msg, checked) => {
      const newList = list.map((item) => {
        item.isDone = checked
        return item
      })
      setList(newList)
    })
    const deleteDoneToken = PubSub.subscribe('deleteDone', () => {
      const newList = list.filter((item) => !item.isDone)
      setList(newList)
    })

    return () => {
      PubSub.unsubscribe(addToken)
      PubSub.unsubscribe(updateToken)
      PubSub.unsubscribe(deleteToken)
      PubSub.unsubscribe(checkallToken)
      PubSub.unsubscribe(deleteDoneToken)
    }
  }, [list])

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        {list.length ? (
          <div>
            <List list={list}></List>
            <Footer list={list}></Footer>
          </div>
        ) : (
          <h1>恭喜你,暂时没有任务</h1>
        )}
      </div>
    </div>
  )
}
