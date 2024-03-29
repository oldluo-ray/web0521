import vueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Message from './pages/Message'
import Detail from './pages/Detail'
export default new vueRouter({
    routes:[
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name: 'detail',
                            path: 'detail/:id',
                            component:Detail,
                            props: true
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            component: About
        }
    ]
})