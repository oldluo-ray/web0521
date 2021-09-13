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


   
    // a = b => c => d => {

    // }
    // a = b =>{
    //     return c => {
    //         return d =>{

    //         }
    //     }
    // }
    handle = (name) => (e) => {
        const value = e.target.type ==='checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }
      
    

    render() {
        return (
            <div>
                用户名:<input type="text"  value={this.state.userName}  onChange={this.handle('userName')}/>
                <br />
                复选: <input type="checkbox"  checked={this.state.isCheck} onChange={this.handle('isCheck')}/>
                <br />
                <select name="" id=""  value={this.state.eat} onChange={this.handle('eat')}>
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
