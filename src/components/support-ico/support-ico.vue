<!--
 * @Date: 2020-08-25 21:32:54
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-08-25 22:05:03
-->
<template>
  <div>
    <span class="support-ico" :class="iconClass"></span>
  </div>
</template>

<script>
export default {
  name: 'SupportIco',
  props: {
    size: {
      type: Number,
      default: 0
    },
    type: {
      type: Number,
      default: 0
    }
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    iconClass() {
      const classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
      return `icon-${this.size} ${classMap[this.type]}`
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/mixin'
.support-ico
  display: inline-block
  background-repeat: no-repeat

.icon-1 {
  width: 12px;
  height: 12px;
  background-size: 12px 12px;

  &.decrease {
    bg-image('decrease_1');
  }

  &.discount {
    bg-image('discount_1');
  }

  &.guarantee {
    bg-image('guarantee_1');
  }

  &.invoice {
    bg-image('invoice_1');
  }

  &.special {
    bg-image('special_1');
  }
}

.icon-2 {
  width: 16px;
  height: 16px;
  background-size: 16px 16px;

  &.decrease {
    bg-image('decrease_2');
  }

  &.discount {
    bg-image('discount_2');
  }

  &.guarantee {
    bg-image('guarantee_2');
  }

  &.invoice {
    bg-image('invoice_2');
  }

  &.special {
    bg-image('special_2');
  }
}

.icon-3 {
  width: 12px;
  height: 12px;
  background-size: 12px 12px;

  &.decrease {
    bg-image('decrease_3');
  }

  &.discount {
    bg-image('discount_3');
  }

  &.guarantee {
    bg-image('guarantee_3');
  }

  &.invoice {
    bg-image('invoice_3');
  }

  &.special {
    bg-image('special_3');
  }
}

.icon-4 {
  width: 16px;
  height: 16px;
  background-size: 16px 16px;

  &.decrease {
    bg-image('decrease_4');
  }

  &.discount {
    bg-image('discount_4');
  }

  &.guarantee {
    bg-image('guarantee_4');
  }

  &.invoice {
    bg-image('invoice_4');
  }

  &.special {
    bg-image('special_4');
  }
}
</style>
