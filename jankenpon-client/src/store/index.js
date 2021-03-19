import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
import Swal from 'sweetalert2'
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
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(response => {
          console.log(response.data.data)
          localStorage.access_token = response.data.data.access_token
          localStorage.username = response.data.data.username
          localStorage.id = response.data.data.id
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          Swal.fire(
            'Oops!',
            'Invalid email/password',
            'error'
          )
        })
    },
    register (context, payload) {
      axios
        .post('/register', payload)
        .then(() => {
          console.log(payload)
          context.dispatch('login', payload)
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            title: 'Oops!',
            text: 'An account exists under the entered username. Would you like to log in?',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: `Log in`
          }).then((result) => {
            if (result.isConfirmed) {
              router.push('login')
            }
          })
        })
    },
    fetchEnemy (context, payload) {
      axios({
        method : 'post',
        url : baseURL + 'matchmake',
        headers : {
          access_token : localStorage.access_token
        }
      })
      .then(({data}) => {
        console.log(data, "<<<<<< data", payload, "<<<<< payload");
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
