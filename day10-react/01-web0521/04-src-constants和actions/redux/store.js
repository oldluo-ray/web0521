import { createStore } from "redux";
import reducer from './reducer'
const store = createStore(reducer)
// store.subscribe(()=>{
//     console.log('store数据变化了', store.getState());
// })
export default store