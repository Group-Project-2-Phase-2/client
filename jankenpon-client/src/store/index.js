import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../axios/axios'
// import router from '@/router/index.js'
// import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    SET_SCORE (state) {
      state.score++
    }
  },
  actions: {
  },
  modules: {
  }
})
