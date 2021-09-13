/*

    1. 插槽

        需求1: 有一个组件Test 
        <template>
            <div>title</div>
            Test组件的子节点写的是什么,这个位置就渲染什么
            <slot></slot>
            <div>footer</div>
        </template>

        <Test>
            <h1>slot位置渲染这个标签</h1>
        </Test>

        需求2:  有一个组件Test 
        <template>
            <div>title</div>
            <slot name="xxx"></slot>
            <hr />
            <slot name="yyy"></slot>
            <div>footer</div>
            <slot name="zzzz"></slot>
        </template>

        <Test>
            <h1 slot="xxx"></h1>
            <h2 slot="yyy"></h2>
            <template slot="zzz" v-slot:zzz>
                <div></div>
                <p></p>
                <span></span>
            </template>
        </Test>

        需求3:  有一个组件Test 
         <template>
            <slot :list="list" :msg="msg" :num="num"></slot>
         </template>
         data(){
            return {
                list: [],
                msg: '',
                num: 0
            }

         }

         <Test >
            <template scope="atguigu">
                <h1>{{atguigu.msg}}</h1>
                <h2>{{atguigu.num}}</h2>
                <ul>
                    <li v-for="item in atguigu.list"></li>
                </ul>
            </template>
         </Test>

    2. vue中发送ajax


         直接使用第三方的js库

         axios

         跨域问题
         解决跨域问题: 
         1. jsonp(get)
         2. cors 后台实现
         3. 代理 
          
         在根目录 定义vue.config.js. 这个文件用来覆盖脚手架中配置的webpack配置项 
         module.exports = {
             lineOnSave: false,
             devServer: {
                 proxy: "目标主机名",
                 proxy: {
                     '/路径':{
                         target: "目标主机名",
                         pathRewrite: {'^/路径':''}
                     },
                     '/路径':{
                         target: "目标主机名",
                         pathRewrite: {'^/路径':''}
                     }
                 }
             }
         }


    3. vuex

      就是一个集中管理状态的工具

      vuex基本的工作流程: 

         vue组件(视图)  --dispatch-->actions --commit-->mutations --修改state--> state的数据发生变化2



         基本的使用: 

         1. 定义store对象

         1.1  把vuex当做插件使用
             Vue.use(vuex)
         1.2  插件store对象
             new Vuex.Store({
                 actions:{
                     函数({commit, state}, value){}
                 },
                 mutations:{
                     // mutations中的函数应该是纯函数
                     函数(state, value){}
                 },
                 state: {},
                 getters:{} //类似于vue中的计算属性
             })

        2. 需要在入口文件中,给vue实例配置store属性
        new Vue({
            ...,
            store:store对象
        })  
        
        3. 在组件中获取数据
            $store.state
            $store.getters
            $store.dispatch
            $store.commit

        4. mapState,mapGetters,mapActions,mapMutations 将vuex中的数据和方法以计算属性的形式,或方法直接添加到组件的实例上 

            computed:{
                ...mapState(['属性'])
                ...mapGetters(['属性'])
            }
            methods:{
                ...mapActions(['方法名'])
                ...mapMutations(['方法名'])
            }

            
        5. vuex的模块化写法: 


            new Vuex.Store({
                modules: {
                    键: 某个组件相关配置对象,
                    键: 某个组件相关配置对象,
                }
            })

            // 配置对象
            {
                namespaced: true
                actions: {},
                mutations:{},
                getters:{},
                state:{}
            }







 */