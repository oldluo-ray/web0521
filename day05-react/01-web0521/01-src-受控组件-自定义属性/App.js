import React, { Component } from 'react'

export default class App extends Component {
    state = {
        userName: '',
        isCheck: true,
        eat: 'mian'
    }
    submit = () =>{
        // 获取input中用户输入的信息 
       console.log(this.state);

    }


    // 文本框的事件处理函数
    // handle = (e) =>{  
    //     this.setState({
    //         userName: e.target.value
    //     })
    // }
    // // 复选框的事件处理函数
    // handleCheck = (e) =>{
    //     this.setState({
    //         isCheck: e.target.checked
    //     })
    // }
    // // 下拉框的事件处理函数
    // handleSelect = (e) =>{
    //     this.setState({
    //         eat: e.target.value
    //     })
    // }

    handle = (e) =>{  
        // 获取要操作的属性名
       const name = e.target.dataset.v;
       // 判断,如果是复选框就获取checked属性的值,如果不是,就都是value
       const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]:value      
         })
    }

    render() {
        return (
            <div>
                用户名:<input type="text" data-v="userName" value={this.state.userName}  onChange={this.handle}/>
                <br />
                复选: <input type="checkbox" data-v="isCheck" checked={this.state.isCheck} onChange={this.handle}/>
                <br />
                <select name="" id="" data-v="eat" value={this.state.eat} onChange={this.handle}>
                    <option value="unkown">中午不知道吃什么</option>
                    <option value="mian">面</option>
                    <option value="fen">粉</option>
                    <option value="rou">肉</option>
                </select>
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}
