<!--
 * @Date: 2020-10-04 10:06:58
 * @LastEditors: ,: hanjiawang
 * @LastEditTime: ,: 2020-10-20 20:44:30
-->
<template>
  <div class="tab">
    <cube-tab-bar ref="tabBar" v-model="selectedLabel" :data="tabs" showSlider :useTransition="false"> </cube-tab-bar>
    <div class="slider-wrapper">
      <cube-slide @scroll="onScroll" @change="onChange" :loop="false" :show-dots="false" :auto-play="false" :initialIndex="index" ref="slide" :options="slideOptions">
        <cube-slide-item v-for="(item, index) in tabs" :key="index">
          <component :is="item.component" :data="item.data"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabs: {
      type: Array,
      default: function() {
        return {}
      }
    },
    initalIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initalIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThrehold: 0
      }
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
  methods: {
    onScroll(opt) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = (-opt.x / slideWidth) * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    },
    onChange(index) {
      this.index = index
    }
  }
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
