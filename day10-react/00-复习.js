/*
   react-router-dom

    1. Switch 

        用来包裹Route组件,包裹了的Route,再匹配的时候,前面的匹配成功,后面的就不再匹配

    2. Redirect 
         重定向 

          <Redirect from="" to=""></Redirect>

          只写to的时候,只要Redirect解析了,就会立刻重定向
          如果写了from和to.那么需要被Switch包裹,否则from无法生效

    3. NavLink 

          功能与Link类似,但是可以自动添加active类名
          通过activeClassName 可以自定义类名

    问: 什么组件才能拿到history,location,match这个三个对象,以及获取获取

        被Route组件管理的组件,默认可以获取到这三个对象
        通过props获取

        比如: Test组件,不是被Route管理的,但是也需要使用者三个对象,应该如何解决?

        import {withRouter} from 'react-router-dom'

        export default withRouter(Test)


    4. history

            push('/目标路径', 要传递的数据)
            replace('/目标路径', 要传递的数据)

    5. location 
            location.state 可以获取到push/replace的第二个参数

    6. match 
            match.params 用来获取路由参数

            定义路由参数: 
            <Route path="/路径/:参数名?"></Route>

            如何传递路由参数:

            Link/NavLink to="/路径/参数"
            push/replace('/路径/参数')

    7. 嵌套路由

         如果是二级路径,定义路径的时候,路径应该包含一级路由


   redux 
        是一个独立的用于集中管理数据的js库

        store  管理数据
        根据redux中的api.创建出来store对象
        import {createStore} from 'redux'
        const store = createStore(reducer函数)

        reducer  修改数据
            state接收到的就是store中最新的state数据
            action 传入的需求对象

            reducer函数执行时机: 
            1. createStore的时候,为了初始化数据
            2. 调用了store.dispatch(action对象),触发reducer
            functoin reducer(state=初始值,action){

                switch(action.type){
                    case 需求类型的字符串:
                        ...对数据进行操作

                        return {
                            ...state,
                            属性: 值
                        }

                    default: 
                        return state
                        
                }

            }

        action 提出修改数据的需求

            {type: '需求的描述'}



   














*/