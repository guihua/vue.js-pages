<template>
  <div class="page-content">
    <div class="list" v-for="(list, m) in listData" :key="m">
      <h2>{{list.title}}</h2>
      <list-item v-for="(item, n) in list.list" :key="n" :item="item"></list-item>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',

    components: {
      ListItem: require('./item.vue')
    },

    props: {
      listData: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import './list.scss'
</style>
