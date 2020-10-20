<!--
 * @Date: 2020-08-23 22:42:27
 * @LastEditors: ,: hanjiawang
 * @LastEditTime: ,: 2020-10-20 20:44:10
-->
<template>
  <div id="app">
    <VHeader :seller="seller" />
    <div class="tab-wrappers ">
      <Tab :tabs="tabs" :initalIndex="0" />
    </div>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import Tab from 'components/tab/tab'
import { getSeller } from 'api'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import Goods from 'components/goods/goods'
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
  computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评价',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
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
    .tab-wrappers {
      position fixed
      top 136px
      left 0
      right 0
      bottom 0
    }
</style>
