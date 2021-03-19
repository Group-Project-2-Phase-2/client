import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://guarded-garden-08318.herokuapp.com'
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
