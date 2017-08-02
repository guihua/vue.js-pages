<template>
  <ul class="cmui-tab">
    <router-link
      class="cmui-tab-item"
      v-for="item in tabs"
      :key="item.id"
      :to="item.to"
      tag="li"
      active-class="current"
      :exact="item.to === '/' ? true : false">
      <a href="javascript:;">{{item.text}}</a>
    </router-link>
  </ul>
</template>

<script>
  export default {
    name: 'tab',

    props: {
      tabs: Array
    },

    methods: {
      select (e) {
        console.log(e.target)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './tab'
</style>
