import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 100,
    mensaje: "Hola"
  },
  mutations: {
    SET_TOTAL_AUM(state) {
      state.total++;
    },
    SET_TOTAL_DIS(state, payload) {
      state.total = state.total - payload;
    }
  },
  actions: {
    accionAumentar({commit}){
      commit('SET_TOTAL_AUM');
    },
    accionDisminuir({commit}, numero){
      commit('SET_TOTAL_DIS', numero);
    },
    accionBoton({commit}, {accion, numero}) {
      if(accion) {
        commit('SET_TOTAL_AUM');
      } else {
        commit('SET_TOTAL_DIS', numero);
      }
    }
  },
  modules: {
  },
  getters:{
  }
})
