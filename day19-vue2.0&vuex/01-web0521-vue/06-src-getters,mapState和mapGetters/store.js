// 1. 引入vue和vuex 
import Vue from 'vue'
import Vuex from 'vuex'

// 2. 使用vuex 
Vue.use(Vuex)


//3. 创建store对象

export default new Vuex.Store({
    // 调用dispatch方法会触发
    actions: {
            jiaOdd(context, value){
                // console.log(context,value);
                if(context.state.sum % 2 !== 0){

                    context.commit('jia', value)

                }
            },
            jiaWait(context, value){
                setTimeout(()=>{
                    context.commit('jia', value)
                },1000)
            }
    },
    // 调用commit方法会触发
    mutations: {
        jia(state,value){
            state.sum += value
        },
        jian(state,value){ 
            state.sum -= value 
        }
    },
    // 数据
    state: {
        sum: 0
    },
    //getter
    getters:{
        bigSum(state){
            console.log('bigSum调用了', state);
            return state.sum * 10
        }
    }
})