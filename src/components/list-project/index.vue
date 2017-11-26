<template>
  <div class="list">
    <item-project v-for="(item, index) in list" :key="index" :item="item"></item-project>
  </div>
</template>

<script>
  export default {
    name: 'list-seq',

    components: {
      ItemProject: require('./item.vue')
    },

    props: {
      list: Array
    }
  }
</script>

<style lang="scss">
  @import './index.scss'
</style>
