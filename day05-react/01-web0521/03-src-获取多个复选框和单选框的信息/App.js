import React, { Component } from 'react'

export default class App extends Component {
    state = {
        userName: '',
        isCheck: true,
        eat: 'mian',
        hobby: [],
        gender: 'male',
    }
    //提交按钮的事件处理函数
    submit = () =>{
        // 获取input中用户输入的信息 
       console.log(this.state);

    }
    // 受控组件的事件处理函数
    handle = (name) => (e) => {
        const value = e.target.type ==='checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }
    // 爱好(多个复选框为一组的情况下)
    checkHandle = (e) => {
        // console.log('执行了');
        // 1. 获取用户输入的信息
        const value = e.target.value
        // 2. 判断, 判断state里面的hobby中是否存储了这个的信息,如果有则删除,没有则添加
        // 判断一个数组中是否有指定元素 indexOf
        const {hobby} = this.state
        const index = hobby.indexOf(value)
        if(index >= 0){
            //数组已经有,要删除
            hobby.splice(index, 1)
        }else{
            // 没有要添加
            hobby.push(value)
        }
        this.setState({
            hobby,
        })

    }

    radioHandle = (e) => {
        const value = e.target.value 
        this.setState({
            gender: value
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
                <br />

                爱好: 吃饭 <input type="checkbox" value={'eat'} onChange={this.checkHandle}/> 睡觉 <input type="checkbox" value="sleep" onChange={this.checkHandle}/>
                <br />
                性别: 男 <input type="radio" name="gender" value="male" onChange={this.radioHandle}/> 女 <input type="radio" name="gender" value="female" onChange={this.radioHandle}/>
                <br />
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}
