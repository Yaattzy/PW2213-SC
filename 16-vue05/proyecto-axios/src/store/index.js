import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
    todos: []
  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts;
    },
    SET_POST(state, post){
      state.post = post;
    },
    SET_TODOS(state, t) {
      state.todos = t;
    }
  },
  actions: {
    getPosts({commit}){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('SET_POSTS', response.data);
      })
      .catch(error => console.log(error));
    },
    getPost({commit}, id){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        commit('SET_POST', response.data);
      })
      .catch(error => console.log(error));
    },
    getTodos({commit}){
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        commit('SET_TODOS', response.data);
      })
      .catch(error => console.log(error));
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(t => t.completed);
    }
  }
})
