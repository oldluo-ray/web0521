import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: JSON.parse(localStorage.getItem('todos')) || []
  },
  actions: {
    add({ commit }, todoName) {
      commit('addTodo', todoName)
    },
  },
  mutations: {
    addTodo(state, todoName) {
      const todoObj = {
        id: Date.now(),
        isDone: false,
        todoName,
      }

      state.todoList.push(todoObj)
    },

    updateTodo(state, id) {
      state.todoList.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteTodo(state, id) {
      state.todoList = state.todoList.filter((item) => item.id !== id)
    },
    allCheckUpdate(state,checked){
       state.todoList.forEach(item=>{
         item.isDone = checked
       })
    },
    clearDoneTodo(state){
      state.todoList = state.todoList.filter(item=>!item.isDone)
    }
  },
  getters:{
    allTotal(state){
      return state.todoList.length
    },
    doneTotal(state){
      return state.todoList.filter((item)=>item.isDone).length
    }
  }
})
