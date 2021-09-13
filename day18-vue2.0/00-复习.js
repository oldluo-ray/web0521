/*

    过滤器

        定义: 

            局部 
                {
                    filters: {
                        过滤器名(value){
                            return 结果
                        }
                    }
                }
            全局
                Vue.filter('过滤器名',(value)=>{return 结果})

        使用:

                {{值 | 过滤器 | 过滤器}}
                :属性="值 | 过滤器 | 过滤器"


    其他内置指令

        v-text 动态渲染子节点, 会覆盖原来的内容 只渲染文本
        v-html 动态渲染子节点, 会覆盖原来的内容 会解析html 慎用!! 防止xss攻击
        v-cloak 为了解决闪屏, 给需要的标签,添加v-cloak属性,写对应的样式,让其隐藏.当vue管理了对应的模板之后,会自动删除所有的v-cloak属性. 隐藏的标签就渲染出来了


    自定义指令

       定义: 

          全局
          Vue.directive('自定义指令名',{}/函数)

          Vue.directive('指令名',()=>{
              // 代表了bind和update
          })

          局部
          {
              directives: {
                  指令名: {
                      bind(element, binding){
                          element.value = binding.value
                      }, 指令和元素绑定成功调用
                      inserted(){
                          element.focus()
                      }, 元素插入到页面上的时候调用(渲染调用)
                      update(){
                          element.value = binding.value
                      } 模板重新解析的时候调用
                  }
              }
          }

          使用: 
          注意: 定义指令时,不需要v-. 但是使用时,必须加v-
          <div v-指令名="data中的数据"></div>


    生命周期钩子函数

          初始化
             beforeCreate  还没有代理
             created    代理完毕,可以通过vm获取到数据
          挂载
             beforeMount dom还没有真正的渲染
             mounted  渲染完成了
          更新
             beforeUpdate  数据是新的,dom是旧的
             updated   数据是新的,dom也是新的
          卸载
             beforedestroy  即将卸载
             destroyed  卸载   也可以获取到数据,但是没有响应式
          

    单文件组件

          template 写结构 有且仅有一个根标签

          script 定义组件的代码

            export default Vue.extend({})
            export default {
                data(){
                    return {

                    }
                },
                methods:{},
                computed:{}
            }

          style
            scoped 样式只在当前组件中生效(局部样式)



        注册组件 
            
            全局注册 当前项目中所有的组件中都可以使用

                Vue.component('组件名',组件) 

            局部注册 当前组件中使用,其他无法使用
                {
                    components:{
                        组件名: 组件
                    }
                }

        使用组件 
                <Test></Test>

    ref 

        用来绑定标签和组件

        如何绑定: 
            <Test ref="yyy"></Test>
            <div ref="xxx"></div>

        在当前组件中
        vc.$refs.xxx  Test组件的实例
        vc.$refs.yyy   div的真实dom对象

    props

        父组件向子组件传递数据的方式

        传: 

        <Son :num="num" msg="abc"></Son>


        接收: 

        props: ["num","msg"]

        props: {
            num:Number,
            msg: String
        }

        props:{
            num: {
                type: Number,
                default: 默认值,
                required: true
            }
        }














*/