export default {
    namespaced: true, // 开启作用域
    state: {
        count: 0
    },
    getters: {
        bigCount(state){
            return state.count + 10
        }
    },
    actions: {
        jiaWait({commit}, value){
           
            setTimeout(() => {
                commit('jia',value)
            }, 1000);
        }
    },
    mutations: {
        jia(state,value){
            state.count += value
        }
    }
}