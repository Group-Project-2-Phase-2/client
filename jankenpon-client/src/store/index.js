import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
// import router from '@/router/index.js'
// import Swal from 'sweetalert2'
const baseURL = 'http://localhost:3000/'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userScore1: 0,
    userScore2: 0,
    userCard1: '',
    userCard2: '',
    user1: {id: '', username: '', room: ''},
    user2: {id: '', username: '', room: ''}
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
    REMOVE_USERSCORE1 (state) {
      state.userScore1 = 0
    },
    REMOVE_USERSCORE2 (state) {
      state.userScore2 = 0
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
      let { id, room, username } = payload
      state.user1.id = id
      state.user1.username = username
      state.user1.room = room
    },
    SET_USER2 (state, payload) {
      let { id, room, username } = payload
      state.user2.id = id
      state.user2.username = username
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
    fetchEnemy (context, payload) {
      axios({
        method : 'post',
        url : baseURL + 'matchmake',
        headers : {
          access_token : localStorage.access_token
        }
      })
      .then(({data}) => {
        console.log(data, payload);
        console.log("sukses");
        router.push('match')
      })
      .catch(err => {
        console.log("error");
        console.log(err);
        router.push('match')
      })
    }
  },
  modules: {
  }
})
