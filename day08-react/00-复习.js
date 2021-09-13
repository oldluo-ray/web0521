/*



    1. 纯组件
        React包里面提供的一个组件 

        纯组件帮助我们实现了shouldComponentUpdate,但是默认是浅层对比.所以如果要修改状态数据,不要直接修改, 应该创建一份新的值去修改


    2. 高阶组件
        作用: 为了复用组件中重复的状态和逻辑

        function (组件){
            return class XXX extends Component{
                ..定义状态和逻辑
                render(){
                    return 组件
                }
            }
        }

    3. renderprops 
        作用: 为了复用组件中重复的状态和逻辑

        class xxx extends Compnent {
            ...定义状态和逻辑

            render(){
                return this.props.render()
                return this.props.chilren()
            }
        }


    4. hooks
        
        作用: 可以在函数组件中,实现更类组件相似的功能

        useState, useEffect 

        引入: 
            import {useState, useEffect} from 'react' 

            const [count, setCount] = useState(0) 


        模拟挂载和即将卸载: 
            useEffect(()=>{
                return ()=>{}
            },[])

        1. 默认外层模拟挂载和更新, 内层模拟卸载
        2. 如果第二个参数是空数组, 则外层只模拟挂载,内部模拟卸载
        3. 如果数组中传入了数据,只有当数据发生变化的时候,外层才模拟更新,否则还是只模拟挂载. 内部还是卸载


        hooks的使用规则: 
            1. 只能在函数组件/自定义hook中使用
            2. 写在函数组件或自定义hook的顶级作用域中


        什么是自定义hook,如何自定义hook?

            use开头的函数












*/