import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '@/router/index.js'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
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
        })
    }
  },
  modules: {
  }
})
