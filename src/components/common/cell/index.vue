<template>
  <div class="cmui-cell" :class="{ 'cmui-cell-access': access }">
    <div class="cmui-cell-hd">
      <slot name="hd"></slot>
    </div>
    <div class="cmui-cell-bd cmui-cell-primary">
      <slot></slot>
    </div>
    <div class="cmui-cell-ft">
      <slot name="ft"></slot>
      <cmui-icon name="arrow-right" v-if="access"></cmui-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cell',

    components: {
      CmuiIcon: require('../icon')
    },

    props: {
      access: Boolean
    }
  }
</script>

<style lang="scss" scoped>
  @import './cell'
</style>
