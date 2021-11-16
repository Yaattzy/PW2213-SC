import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    todo: {}
  },
  mutations: {
    SET_TODOS(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, id){
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    UPDATE_TODO(state, t) {
      state.todos = state.todos.map(todo => todo.id === t.id ? t : todo);
    },
    SET_TODO(state, id) {
      state.todo = state.todos.find(todo => todo.id === id);
    }
  },
  actions: {
    agregarTodo({commit}, todo){
      commit('SET_TODOS', todo);
    },
    eliminarTodo({commit}, id) {
      commit('DELETE_TODO', id);
    },
    updateTodo({commit}, todo) {
      commit('UPDATE_TODO', todo);
    },
    setTodo({commit}, id) {
      commit('SET_TODO', id);
    }
  },
  modules: {
  }
})
