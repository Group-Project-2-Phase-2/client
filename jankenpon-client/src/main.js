import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
import VueSocketIO from 'vue-socket.io'

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000'
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
