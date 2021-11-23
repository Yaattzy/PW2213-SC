import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: [],
    loading: false
  },
  mutations: {
    SET_PERSONAS(state, personas){
      state.personas = personas;
    },
    SET_LOADING(state, xd) {
      state.loading = xd;
    }
  },
  actions: {
    setPersonas({commit}){
      commit('SET_LOADING', true);
      axios.get('http://localhost:3000/personas')
      .then(response => {
        commit('SET_PERSONAS', response.data);
      })
      .catch(error => console.log("error", error))
      .finally(() => commit('SET_LOADING', false));
    }
  },
  modules: {
  }
})
