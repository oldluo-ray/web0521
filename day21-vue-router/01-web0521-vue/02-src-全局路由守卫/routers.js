//定义路由表
import vueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import News from'./pages/News'
import Message from'./pages/Message'
const router =  new vueRouter({
    // mode 可以修改路由模式 默认值是hash
    // mode: 'history', 
    routes:[
        {
            path: '/',
            component: Home,
            meta:{
                title: '首页'
            }
        },
        {
            path: '/home',
            component: Home,
            meta:{
                title: '首页'
            }
        },
        {
            path: '/about',
            component: About,
            meta: {
               isAuth: true ,
               title: '关于'
            }, //元数据
            // 定义/about下面的子组件
            children: [
                {
                    // 注意: 嵌套路由再定义路由规则的时候,不需要包含上一级路由(vue会根据定义路由表的结构,自动帮我们添加), 甚至连/都不用写.vue会自动添加
                    name:'xinwen',
                    path: 'news/:id',
                    component:News,
                    meta: {
                        isAuth: true ,
                        title: '新闻'
                     }, //元数据
                },
                {
                    name:"xinxi",
                    // 如果定义了路由参数,就必须传递路由参数.否则对应的组件无法匹配
                    // 加上问号,表示可选路由参数
                    path: 'message/:page?/:pageSize?',
                    component:Message,
                    meta: {
                        isAuth: true ,
                        title: '信息'
                     }, //元数据
                    // props传参: 
                    //方式一: 
                    // 写死的数据,一般实际开发用的不多
                    // props: {
                    //     num1: 1,
                    //     num2: 2
                    // }
                    // 方式二:
                    // 会自动将路由参数以props的形式,传递给当前组件
                    // 注意: 路由参数的参数名叫什么, 接收时,字符串就写什么 
                    // props: true,
                    // 方式三: 
                    // 可以将各种数据,以props的形式,传递给当前组件. 组件如何接收,取决于返回的对象中键是如何定义的
                    props($route){
                        return {
                            // 对象中的键,决定了组将中props如何接收
                            // 值就是要传递的数据
                            page: $route.params.page,
                            name: $route.query.name,
                            str: 'test'
                        }
                    }
                }
            ]
        }
    ]

})

//定义前置全局路由守卫
// 这个回调函数执行时机: 1. 初始化 2. 所有的路由切换都会触发回调函数(全局)
router.beforeEach((to,from,next)=>{
    // to 目标路由的信息对象
    // from 起始路由的信息对象
    // console.log(to,from);
    // console.log(to);
    // next调用,就会修改路径,切换视图.不调用,就不会修改路径,视图也不会切换
    // next()

    // 需求1： 所有的路由，都需要登录才能访问
    // 登录的依据: localstorage中是否存储了token
    // if(localStorage.getItem('token')){
    //     next()
    // }

    // 需求2: 需要鉴权的组件,才判断有没有token
    if(to.meta.isAuth){
        if(localStorage.getItem('token')){
            next()
        }
    }else{
        next()
    }
})

// 定义后置全局路由守卫
//执行时机: 1. 初始化  2. 切换完成之后
router.afterEach((to,from)=>{
    console.log('后置路由执行了', to, from);
    const title = to.meta.title
    document.title = title || 'atguigu'
})


export default router