<template>
  <ul class="tab">
    <li class="tab-item" v-for="(tab, i) in tabs" :key="i">{{tab}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'tab',

    props: {
      tabs: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import './tab.scss';
</style>
