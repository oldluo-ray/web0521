import Vue from 'vue'
import Vuex from 'vuex'
import count from './components/count/counModule'
import school from './components/school/schoolModule'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        xxx: count,
        yyy: school
    }
})