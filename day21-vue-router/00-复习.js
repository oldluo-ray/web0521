/*
 
    1. 前端路由的原理

        当路径发生变化,浏览器不发送请求,内部使用history.listen监听路径的变化,会根据之前配置好的路由规则,找到指定组件,进行渲染

    2. vue-router的基本

        1. 下载 npm i vue-router 
        2. 引入 import vueRouter from 'vue-router' 
        3. 定义并导出路由器对象
            export default new vueRouter({
                mode: 'history/hash'
                routes:[
                    {
                        path: '/路径',
                        component:组件
                    }
                ]
            })
        4. 在入口文件中配置路由器对象
        new Vue({
            router: 路由器对象
        })

        5. 使用vueRouter插件
        Vue.use(vueRouter)

        修改路径: 
            <router-link replace to="/路径" active-class="类名">文本</router-link>
            <router-link :to="{
                path: /路径
            }">文本</router-link>

        让组件展示在指定位置上
            <router-view></router-view>

    3. 嵌套路由

            export default new vueRouter({
                mode: 'history/hash'
                routes:[
                    {
                        path: '/about',
                        component:组件,
                        children:[
                            {
                                path: 'news',
                                component:组件,  
                            }
                        ]
                    }
                ]
            })

            <router-link to="/about/news"></router-link>

    4. 命名路由
     export default new vueRouter({
                mode: 'history/hash'
                routes:[
                    {
                        name: 'gy'
                        path: '/about',
                        component:组件,
                        children:[
                            {
                                name:'xw'
                                path: 'news',
                                component:组件,  
                            }
                        ]
                    }
                ]
            })

        <router-link :to="{
            name: 'xw'
        }"></router-link>

    5. 路由传参

        查询字符串

            传
                <router-link to="/路径?键=值"></router-link>
                <router-link :to="{
                    name: 
                    path:
                    query:{  查询字符串可以和name以及path配合使用
                        键: 值
                    }
                }"></router-link>

            收

                在组件中
                this.$route.query.键

        路由参数

            定义参数
            {
                name:'xw'
                path: 'news/:参数名?',
                component:组件,  
            }

            传
            <router-link to="/about/news/参数"></router-link>
            <router-link :to="{
                name: 
                path: 如果传递路由参数,写了params,就不能使用path
                params:{  查询字符串可以和name以及path配合使用
                    键: 值
                }
            }"></router-link>


            收
            this.$route.params.属性
                
        props

            将数据,以props的形式传递到指定的组件

            props三种写法: 

            props: 对象
             props: {键: 值}
            props: 布尔值,
              props: true 
              自动将传入当前组件的路由参数,以props的形式,传递到组件中

            props: 函数 可以将查询字符串,路由参数等数据通过props传递给指定组件
                props($route){
                    return {
                        键: 
                    }
                }
            注意: props接收时,键要保持一致


    6. 编程式导航

        
            this.$router.push/replace/go/back/forward 

            push({
                name,
                path,
                params,
                query
            })















*/