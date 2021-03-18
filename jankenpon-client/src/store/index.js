import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../axios/axios'
// import router from '@/router/index.js'
// import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userScore1: 0,
    userScore2: 0,
    userCard1: '',
    userCard2: '',
    user1: {id: '', room: ''},
    user2: {id: '', room: ''}
  },
  mutations: {
    SET_USERSCORE1 (state, payload) {
      if (payload) {
        state.userScore1++
      }
    },
    SET_USERSCORE2 (state, payload) {
      if (payload) {
        state.userScore2++
      }
    },
    SET_CARD1 (state, payload) {
      state.userCard1 = payload.card
    },
    SET_CARD2 (state, payload) {
      state.userCard2 = payload.card
    },
    REMOVE_CARD1 (state) {
      state.userCard1 = ''
    },
    REMOVE_CARD2 (state) {
      state.userCard2 = ''
    },
    SET_USER1 (state, payload) {
      let { id, room } = payload
      state.user1.id = id
      state.user1.room = room
    },
    SET_USER2 (state, payload) {
      let { id, room } = payload
      state.user2.id = id
      state.user2.room = room
    },
    REMOVE_USER1 (state) {
      state.user1.id = ''
      state.user1.room = ''
    },
    REMOVE_USER2 (state) {
      state.user2.id = ''
      state.user2.room = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
