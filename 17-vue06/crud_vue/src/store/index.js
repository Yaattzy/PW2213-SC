import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {
    agregarTodo({commit}, todo){
      commit('SET_TODOS', todo);
    }
  },
  modules: {
  }
})
