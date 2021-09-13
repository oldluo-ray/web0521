//定义路由表
import vueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
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
        }
    ]

})