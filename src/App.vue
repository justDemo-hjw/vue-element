<!--
 * @Date: 2020-08-23 22:42:27
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-08-25 22:19:16
-->
<template>
  <div id="app">
    <VHeader />
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
export default {
  name: 'App',
  components: {
    VHeader
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/mixin';
  #app
    border-1px()
</style>
