import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    consultShow: false
  },
  actions: {
    changeConsultState: ({ commit, dispatch }) => {
      commit('CONSULT')
    }
  },
  mutations: {
    CONSULT: (state) => {
      state.consultShow = !state.consultShow;
    }
  },
  getters: {

  }
})

export default store