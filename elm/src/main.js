// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import Vuex from 'vuex'
import 'mint-ui/lib/style.css'
import './config/rem.js'
// import './config/generator.js'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
