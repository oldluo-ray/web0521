import React, { Component } from 'react'
// 1. 创建ref对象
const testRef = React.createRef()
export default class App extends Component {
    submit = () => {
        // 可以获取到要上传的文件对象
       const file = testRef.current.files[0]
       const xhr = new XMLHttpRequest()
       xhr.open('post', '服务器地址')
       // 注意: 如果要上传文件,ajax默认是无法上传的,需要配合formdata使用.但是如果使用了formdata,就无需设置请求头了. 
       // 创建formdata对象
       const formdata = new FormData()
       // 利用formdata中的append方法,将要上传的文件,添加到formdata中
       formdata.append('file', file)
       // 直接将formdata写在请求主体中,上传给服务器
       xhr.send(formdata)
    }
    render() {
        return (
            <div>
                {/* 将ref对象和虚拟dom绑定.最终真实dom就会存储到ref对象的current属性上 */}
                <input type="file" ref={testRef}/>
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}
