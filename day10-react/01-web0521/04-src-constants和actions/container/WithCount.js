// 容器组件
// 注意: 这个connect函数,其实就是一个高阶组件函数,执行完之后,返回一个高阶组件.高阶组件中可以监听redux的数据的变化,可以将最新的redux的数据,传递给子组件
import {connect} from 'react-redux'
import Count from '../components/Count'
// 函数有书写要求,函数名随便起. 
// 这个函数可以会被高阶组件调用,调用的时候,会将redux中最新的数据,传入到函数中,所以这个函数可以写一个形参,接收redux数据
// mapStateToProps的调用时机: 
// 1. 创建高阶组件的时候,被调用一次,为了以上来先将redux中的数据,传递给Count组件
// 2. 当redux数据发生变化的时候,会被调用,为了将最新的数据,传递给Count组件
const mapStateToProps = (state)=>{
    // console.log('mapStateToProps被调用了',state);
    // 按照要求,这个函数,必须写一个对象的返回值.对象中写的有什么,最终Count组件中通过props就可以拿到什么
    return {
        count: state.count
    }
}

// mapDispatchToProps只会在创建高阶组件的时候调用一次,为了将封装好的函数,传递给Count组件.后面就不会再被调用了. 写这个函数目的就是为了在Count组件中,不直接出现dispatch
const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatch被调用了');
    return {
        inc: (action)=>{
            dispatch(action)
        },
        dec: (action) => {
            dispatch(action)
        }
    }
}
// connect函数第一次调用什么都不传, Count组件通过props只能获取到一个dispatch方法,用来修改redux中的数据,但是无法获取到redux的数据
// 想获取redux的数据,就要在connect函数第一次调用的时候,传入一个函数
export default connect(mapStateToProps,mapDispatchToProps)(Count)

