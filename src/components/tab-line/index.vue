<template>
  <ul class="tab">
    <li class="tab-item"
      v-for="(tab, i) in tabs"
      :key="i"
      :class="{ 'active': activeTabIndex === i }"
      @click="select(i)">{{tab}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'tab',

    props: {
      tabs: Array
    },

    data () {
      return {
        activeTabIndex: 0
      }
    },

    methods: {
      select (index) {
        this.activeTabIndex = index
      }
    }
  }
</script>

<style lang="scss">
  @import './tab.scss';
</style>
