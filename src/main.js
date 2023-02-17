import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'
Vue.use(VueRouter)
// Vue.config.productionTip = false

Vue.use(Toasted, {
  duration: 2000,
  position: "bottom-center",
  theme: "outline",
  iconPack: "material"
})
new Vue({
  render: h => h(App),
  router

}).$mount('#app')
