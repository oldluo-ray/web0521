/*


    缓存组件

    // 缓存router-view要渲染的所有的组件
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        // 指定一个组件缓存
        <keep-alive include="组件名">
            <router-view></router-view>
        </keep-alive>

        // 指定多个组件缓存
         <keep-alive :include="['组件名','组件名']">
            <router-view></router-view>
        </keep-alive>


    激活和失活的钩子

        activated(){} 激活
        deactivated(){} 失活

    路由守卫

        全局路由守卫

            const router = new vueRouter()

            router.beforeEach((to,from,next)=>{})
            执行时机: 1. 初始化时  2. 项目中任何一个路由切换之前
            router.afterEach((to,from)=>{})
            执行时机: 1. 初始化时  2. 项目中任何一个路由切换之后
        独享路由守卫

            配置在路由对象中

            {
                path,
                component,
                // 执行时机: 1. 初始化时, 2. 切换到当前路由之前
                beforeEnter(to,from,next){

                }
            }

        组件内路由守卫
            写在定义组件的配置对象中
            1. 要切换到当前组件之前
            beforeRouteEnter(to,from,next){}
            2. 要从当前组件切走之前
            beforeRouteLeave(to,from,next){}



        to    目标路由对象  
        from   起始路由对象
        next   函数, 调用会切换到下一个路由

    elment-ui的使用

            1. 下载 
            npm i element-ui

            2. Vue.use(elementUI)


            3. 按需加载需要在babel.config.js中配置

            4. 按需加载之后,就不需要引入css

            5. 导入组件
                import {Buttno} from 'element-ui'

                Vue.component(Button.name, Button)

                <el-button></el-button>


*/
