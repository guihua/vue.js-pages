<template>
  <div class="cmui-grid">
    <div class="cmui-grid-hd">
      <h2>{{title}}</h2>
    </div>
    <div class="cmui-grid-bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'grid',

    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  @import './grid'
</style>
