/*
 * @Date: 2020-08-23 22:42:27
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-10-03 11:27:49
 */
import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './assets/stylus/index.styl'
import './register'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
