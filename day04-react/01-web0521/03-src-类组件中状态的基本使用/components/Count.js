import React, { Component } from 'react'

// 注意: 只有类组件才能定义状态(数据)
export default class Count extends Component {
    constructor(){
        super()
        // 定义状态
        this.state = {
            count: 0
        }
    }
    render() {
        // render体中的this,一定指向当前组件的实例
        return (
            <div>
                <h1>计数器案例</h1>
                <div>{this.state.count}</div>
                {/* 在组件中使用注册事件,由于需要获取到组件实例,所以事件处理函数不能使用普通的函数定义,应该使用箭头函数,从而可以拿到render中的this */}
                <button onClick={()=>{
                    //修改数据,让state里面的count + 1
                    // 注意: 不要直接修改数据,数据是改了,但是视图不会更新
                    // this.state.count += 1
                    
                    // 推荐方式
                    // setState的作用: 1. 修改数据 2. 更新视图
                    this.setState({
                        count: this.state.count + 1
                    })

                }}>按钮+1</button>
            </div>
        )
    }
}
