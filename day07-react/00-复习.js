/*


    1. 组件的生命周期
       几个阶段? 分别执行哪些钩子函数

        挂载阶段

            constructor 
            render 
            componentDidMount

        更新

            render 

            componentDidUpdate

        卸载

            componentWillUnmount


    2. 组件的通讯方式

        props 父->子传递 逐级

        context  父级 -> 子级 传递 可以跨级

        pubsub-js 
            在哪里订阅,怎么订阅
            在组件挂载完成的时候订阅
            PubSub.subscribe('话题',(话题, 数据))=>{})

            怎么发布
            PubSub.publish('话题',数据)


    3. Fragment

         可以包裹jsx结构,但是不会渲染到页面上


    4. 性能优化
        1. 减轻state
            不渲染到页面上的数据,就不添加到state中

        2. shouldComponentUpdate
            可以有效减少组件的更新次数
            什么时候执行: 只在更新阶段执行,在render函数执行之前调用

            接收到两个参数: 最新的props和最新的state 
            this.props或this.state 是旧的数据

            返回值: return false 则render函数不调用. return true 就渲染














*/
