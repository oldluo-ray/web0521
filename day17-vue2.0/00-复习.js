/*


    事件处理

        v-on:事件名=事件处理函数 

        事件处理函数定义在哪里? 

        写在vue实例创建的配置对象中,属性是methods

        简写: @事件名="事件处理函数"

        事件处理函数默认可以接收到事件对象 

        需求: 事件处理函数中既要接收到事件对象,又要接收到一个数字1 

        <div @click="handle($event, 1)"></div>

        事件的修饰符: 
            
            阻止默认行为:  .prevent 
            阻止冒泡: .stop 
            事件触发一次: .once 
            只有是事件目标的时候触发: .self 
            捕获阶段触发: .capture 

        按键修饰符: 

            需求: 按下回车键,触发handle方法
            <div @keyup.enter="handle"></div>

    计算属性

        根据已有的数据,计算出来一个新的数据

        new Vue({
            ..., 
            computed: {
                // 完整写法: 
                属性:{
                    get(){},
                    set(value){}
                }

                // 简写: 
                属性(){

                }
            }

            getter的触发时机: 1. 初始化时执行一次 2. 依赖的数据发生变化时触发
        })

    监听属性

        监听已有数据的变化

        需求: 监听msg

        new Vue({
            ...,
            watch:{
                // 完整写法
                msg: {
                    immediate: true // 初始化时handler触发一次
                    handler(newValue, preValue){
                        // 触发时机,msg发生变化的时候
                    }
                }

                简写: 就相当于写了handler
                 msg(newValue, preValue){

                 }
            }
        })


    计算属性和监听属性的区别:
        1. 计算属性是新增的属性, 监听属性是已有的属性
        2. watch可以完成异步操作, 计算属性不可以


    绑定样式

        class 

            变量, 对象, 数组 

            [类名,类名,类名]

            {
                one:true
                two:false
                
            }

        style

            一定要记得加单位

            对象/ 数组


            {
                color: 'red',
                fontSize: '50px'
            }

            [{},{}]
        

    条件渲染


        v-if   会移除节点
        v-show  通过样式隐藏

    列表渲染

        v-for :key 

        数组,对象,字符串,固定次数 


        <li v-for="(item,index) in list"></li>

    收集表单数据


        男<input type="radio" name="sex" value="male" v-model="data中的属性"/>
        女<input type="radio" name="sex" value="female" v-model="data中的属性"/>

        吃<input type="checkbox"  value="male" v-model="data中的属性"/>
        喝<input type="checkbox"  value="female" v-model="data中的属性"/>

        注意: 复选框要获取多个数据,data中的属性的值应该是数组


        .lazy  失去焦点触发 
        .number 把字符串转成数字
        .trim 去掉两边的空格







 */