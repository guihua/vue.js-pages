import Vue from 'vue'
import Home from './home.vue'

// [v-charts](https://elemefe.github.io/v-charts/#/)
import VeHistogram from 'v-charts/lib/histogram'
import VeRing from 'v-charts/lib/ring'

Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeRing.name, VeRing)

/* eslint-disable no-new */
new Vue({
  el: '#home',
  template: '<Home></Home>',
  components: {
    Home
  }
})
