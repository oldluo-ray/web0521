//定义路由表
import vueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import News from'./pages/News'
import Message from'./pages/Message'
export default new vueRouter({
    // mode 可以修改路由模式 默认值是hash
    // mode: 'history', 
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/about',
            component: About,
            // 定义/about下面的子组件
            children: [
                {
                    // 注意: 嵌套路由再定义路由规则的时候,不需要包含上一级路由(vue会根据定义路由表的结构,自动帮我们添加), 甚至连/都不用写.vue会自动添加
                    name:'xinwen',
                    path: 'news',
                    component:News
                },
                {
                    name:"xinxi",
                    path: 'message',
                    component:Message
                }
            ]
        }
    ]

})