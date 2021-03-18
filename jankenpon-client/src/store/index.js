import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../axios/axios'
// import router from '@/router/index.js'
// import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    userCard1: '',
    userCard2: ''
  },
  mutations: {
    SET_SCORE (state) {
      state.score++
    },
    SET_CARD (state, payload) {
      state.userCard1 = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
