<!--
 * @Date: 2020-08-23 22:42:27
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-08-30 18:06:02
-->
<template>
  <div id="app">
    <VHeader :seller="seller" />
    <HeaderDetail :seller="seller" />
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import HeaderDetail from 'components/header-detail/header-detail'
import { getSeller } from 'api'
export default {
  name: 'App',
  components: {
    VHeader,
    HeaderDetail
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
