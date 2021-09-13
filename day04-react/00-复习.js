/*

    1. jsx中插入数据

        const obj = {name: 'zs'}
        const styleObj = {backgroundColor: 'red', fontSize: 18}

        const div = <div>
             <p style={styleObj}>
                <span>{obj.name}</span>
             </p>
        </div>

    2. 条件渲染
        const isShow = true

        <div>

           {isShow && <span>控制span展示或隐藏</span>}

           {isShow ?  <span>a</span> : <span>b</span>}
            
        </div>    

    3. 列表渲染
        const arr = [{id:1, name: 'zs',age:18},{id:2, name: 'ls',age:20}]

        const ul = <ul>
                        {arr.map((item)=>{

                          return  <li key={item.id}>
                                    <h1>{item.name}</h1>
                                    <h2>{item.age}</h2>
                                  </li>
                        })}
                         
                   </ul>

    4. 操作样式
                        行内
                        类名

    5. 注册事件

         当在input中按下回车键之后,打印input中输入的内容


         <input type="text" onKeyUp={function(e){

                // 判断按下的是否是回车键
                if(e.keyCode === 13){

                   console.log(e.target.value) 

                }
         }}/>

    6. react脚手架使用

        需求: 创建一个react项目,项目名web0521

        下载: npm i create-react-app -g 
        使用: create-react-app web0521

        public中至少有一个index.html
        src中至少有一个index.js(入口文件)
        在开发环境,启动项目: npm start

    7. react中组件

         函数组件
            定义: 
                export default function App(){
                    return <div></div> 
                }

            使用: import App from './App'
                  <App></App>
         类组件














*/