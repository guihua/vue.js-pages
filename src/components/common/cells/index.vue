<template>
  <div class="cmui-cells">
    <div class="cmui-cells-title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'cells',

    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  @import './cells'
</style>

