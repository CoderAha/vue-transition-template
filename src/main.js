// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/reset.css'
import './assets/transition.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/flexiable'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
