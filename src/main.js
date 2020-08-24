/*
 * @Date: 2020-08-23 22:42:27
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-08-24 23:51:39
 */
import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './assets/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
