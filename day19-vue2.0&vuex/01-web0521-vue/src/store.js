import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        id: 1,
        todoName: '吃饭',
        isDone: false,
      },
      {
        id: 2,
        todoName: '敲代码',
        isDone: true,
      },
    ],
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
  },
})
