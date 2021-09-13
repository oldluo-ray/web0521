/*

    1. 定义一个类组件 组件名叫Test

        class Test extends React.Component{

            render(){
                return jsx结构
            }

        }

    2. 类组件中如何定义状态,获取状态,设置状态
        
        class Test extends React.Component{
            constructor(){
                super()
                this.state = {
                    count: 10
                }
            }

            state = {}

            render(){
                return <div>{this.state.count}</div>
            }

        } 

        修改:
            this.setState({
                count: this.state.count + 1
            })


    3. 事件处理函数中this指向的问题

            解决: 
                箭头函数法

                <div onClick={()=>{this.handle()}}>按钮</div>

                bind 
                 this.handle = this.handle.bind(this)

                 es7的简写  
                handle = () => {}


    4. props
            适合用于将父组件中的数据,传递给子组件

            基本使用: 
                传: 
                    <Son str="abc"></Son>
                取: 
                    类: this.props.str
                    函数: 形参props.str
            特点: 1. 可以传递任何类型的数据 2. 只读的


            props校验: 
                使用时机和作用: 
                    一般公共的组件要实现props校验
                    用于给使用者提供更加清晰的错误提示

                使用: 
                    1. 引入prop-types  import PropTypes from 'prop-types' 
                    2. 给当前公共组件,添加静态属性 
                        static propTypes = {
                            属性名: PropTypes.数据类型.isRequired
                        }


            默认props 
                static defaultProps = {
                    属性名: 值
                }

            
    

*/