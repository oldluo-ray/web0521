/*

    1. vue的基本使用

        1.1 引入vue.js
        <script src="vue.js"></script>

        1.2 创建模板
        <div id="root"></div>

        1.3 实例化vue
        new Vue({
            el: '#root' // 定义vue实例绑定的模板是哪个
            data: { // 定义模板中要使用的数据
                属性: 值
            }
        })


    2. 模板中动态插入数据
        注意: 由于vm代理data对象,所以vm身上有data中所有的数据,而模板中可以直接使用vm上的属性
        <div id="root">
            <div>{{js表达式}}</div>
            <div v-bind:id="data中的数据"></div>
        </div>


    3. 绑定数据

        单向数据绑定: v-bind:属性="值"  简写   :属性="值"   data => 视图
        双向数据绑定: v-model:属性="值"  简写   v-model="值"   data <=> 视图

        mvvm 
        m model 数据
        v view 视图
        vm 控制器 vue实例












*/