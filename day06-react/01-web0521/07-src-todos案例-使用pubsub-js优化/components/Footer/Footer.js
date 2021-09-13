import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    const {list} = this.props 
    // 计算总共有多少条和完成了多少条
    const allTotal = list.length 
    const doneTotal = list.filter(item=>item.isDone).length 


    return (
      <div className="todo-footer">
        <label>
          {/* 如果数据中的任务项都选中了,点击全选,就一定会变成都不选中. 如果上面的任务项有一个没选中,点击全选就一定是将上面的任务项都变成选中 */}
          <input type="checkbox" checked={doneTotal === allTotal} onChange={this.props.allCheckHandle}/>
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {allTotal}
        </span>
        <button className="btn btn-danger" onClick={this.props.delDoneHandle}>清除已完成任务</button>
      </div>
    )
  }
}
