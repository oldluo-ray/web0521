
import {connect} from 'react-redux'
import Count from '../components/Count'
import { incCreator, decCreator } from '../redux/actions';



// connect函数第一次调用的第二个参数,如果传入的是一个对象.connect内部就会根据函数,这个函数的名字就是对象的键(对象有几个键值对,就会创建几个函数).
// function incCreator(num){
//     dispatch(incCreator(num))
// }
// function decCreator(num){
//     dispatch(decCreator(num))
// }
export default connect(state=>({count: state.count}),{ incCreator,  decCreator})(Count)

