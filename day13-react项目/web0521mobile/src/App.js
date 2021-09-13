import React, {Suspense} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import routers from './config/routers'

import './App.css'
export default function App() {
    return (
        // suspense是为了配合懒加载使用,不写就会报错. 
        // fallback属性的值,就是在加载组件的空白的过程中,要渲染的视图
        // fallback属性的值,是任何可以渲染的数据类型.比如: 文本, jsx, 组件
        <Suspense fallback={<div style={{color: 'red', fontSize: 20}}>正在加载中</div>}>
            <Router>

                {/* <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route> */}

                {routers.map(item=>{
                    return <Route key={item.path} path={item.path} component={item.component} exact={item.exact}></Route>
                })}
            
            </Router>
        </Suspense>
    )
}
