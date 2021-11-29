import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: [],
    persona: {},
    loading: false
  },
  mutations: {
    SET_PERSONAS(state, personas){
      state.personas = personas;
    },
    SET_LOADING(state, xd) {
      state.loading = xd;
    },
    SET_PERSONA(state, persona) {
      state.persona = persona;
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
    },
    crearPersona({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3000/personas', params)
      .then(onComplete)
      .catch(onError);
    },
    obtenerPersona({commit}, {id, onComplete, onError}) {
      axios.get(`http://localhost:3000/personas/${id}`)
      .then(response => {
        commit('SET_PERSONA', response.data.data);
        onComplete(response);
      })
      .catch(onError);
    }
  },
  modules: {
  }
})
