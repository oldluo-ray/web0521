export default {
    state: {
        schoolName: 'atguigu'
    },
    getters:{
        schoolLongName(state){
            return state.schoolName + '~'
        }
    }
}