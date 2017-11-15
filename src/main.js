
import Vue from 'vue'
import Vuetify from 'vuetify'
import {initializeApp} from 'firebase'
import './stylus/main.styl'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    initializeApp(
      {
        apiKey: 'AIzaSyDRgnGhi6yG6wPNnJXBK4XoBTjxo_su9F8',
        authDomain: 'vuetify-tut.firebaseapp.com',
        databaseURL: 'https://vuetify-tut.firebaseio.com',
        projectId: 'vuetify-tut',
        storageBucket: 'vuetify-tut.appspot.com'
      })
  }
})
