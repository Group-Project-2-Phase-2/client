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
  },
  mutations: {
  },
  actions: {
    fetchEnemy (context, payload) {
      console.log(localStorage.access_token, "<<<<<<<<<<<<<<")
      axios({
        method : 'post',
        url : baseURL + 'matchmake',
        headers : {
          access_token : localStorage.access_token
        }
      })
      .then(({data}) => {
        console.log(data, payload);
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
