<template>
  <i class="cmui-icon" :class="['cmui-icon-' + name]"></i>
</template>

<script>
  export default {
    name: 'icon',

    props: {
      name: String
    }
  }
</script>

<style lang="scss" scoped>
  @import './icon';
  @import './iconfont';
</style>
