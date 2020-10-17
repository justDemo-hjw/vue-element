<!--
 * @Date: 2020-08-23 22:42:27
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-10-17 10:35:44
-->
<template>
  <div id="app">
    <VHeader :seller="seller" />
    <div class="tab-wrapper">
      111
      <Tab />
    </div>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import Tab from 'components/tab/tab'
import { getSeller } from 'api'
export default {
  name: 'App',
  components: {
    VHeader,
    Tab
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
    .tab-wrapper {
      position fixed
      top 136px
      left 0
      right 0
      bottom 0
    }
</style>
