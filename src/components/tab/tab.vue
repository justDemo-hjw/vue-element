<!--
 * @Date: 2020-10-04 10:06:58
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-10-15 20:39:20
-->
<template>
  <div class="tab">
    <cube-tab-bar v-model="selectedLabel" :data="tabs" showSlider :useTransition="false"> </cube-tab-bar>
    <div class="slider-wrapper">
      <cube-slide :loop="false" :show-dots="false" :auto-play="false" :initialIndex="index" ref="slide">
        <cube-slide-item>
          <Ratings />
        </cube-slide-item>
        <cube-slide-item>
          <Seller />
        </cube-slide-item>
        <cube-slide-item>
          <Goods />
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import Goods from 'components/goods/goods'
export default {
  name: 'Tab',
  components: {
    Ratings,
    Seller,
    Goods
  },
  data() {
    return {
      tabs: [{ label: '商品' }, { label: '评价' }, { label: '商家' }],
      index: 0
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(value) {
        this.index = this.tabs.findIndex(item => {
          return item.label === value
        })
      }
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable';
.tab
  display flex
  flex-direction column
  height 100%
  >>> .cube-tab
    padding 10px 0
  .slider-wrapper
    flex 1
    overflow hidden
</style>
