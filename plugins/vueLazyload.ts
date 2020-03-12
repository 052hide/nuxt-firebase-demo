import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 5,
  // error: require('~/assets/imgs/error.png'),
  // loading: require('~/assets/imgs/loading.svg'),
  attempt: 1
})
