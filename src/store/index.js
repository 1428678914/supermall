import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  spname : '',
  spprice: '',
  dianpu: ''
}

const mutations = {
  setspname (state, payload) {
    state.spname = payload
  },
  setspprice (state, payload) {
    state.spprice = payload
  },
  setdianpu(state, payload) {
    state.dianpu = payload
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store