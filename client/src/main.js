import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false
global.api = 'http://35.232.204.231'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
