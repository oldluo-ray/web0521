/*
    前端路由: 路径和视图(组件)的一一对应关系

    前端路由的目的: 为了实现单页面应用(spa)

    前端路由原理: 
        首先,所有的视图(组件)都写在一个html文件中.然后对应的路由规则(不同的路径所对应的视图). 当路径发生变化的时候,根据最新的路径,去找到对应的视图,让当前视图展示,其他视图隐藏

    react-router-dom的基本使用:

        1. 下载 
        2. 引入 
        import { BrowserRouter, Route, Link } from 'react-router-dom'

        BrowserRouter 应该包裹整个应用结构 

        Link 最终渲染到页面上就是一个a标签. 修改了路径但是不发送请求 <Link to="/路径"></Link>

        Route 用来指定前端路由规则 <Route path="/路径" component={组件}></Route>

*/
