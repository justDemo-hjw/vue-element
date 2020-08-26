<!--
 * @Date: 2020-08-23 22:42:27
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-08-26 23:38:02
-->
<template>
  <div id="app">
    <VHeader :seller="seller" />
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'
export default {
  name: 'App',
  components: {
    VHeader
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then(res => {
        this.seller = res
      })
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/mixin';
  #app
    border-1px()
</style>
