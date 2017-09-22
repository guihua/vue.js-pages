<template>
  <div class="list-seq">
    <item-seq v-for="(item, index) in list" :key="index" :index="index" :item="item"></item-seq>
  </div>
</template>

<script>
  export default {
    name: 'list-seq',

    components: {
      ItemSeq: require('./item.vue')
    },

    props: {
      list: Array
    }
  }
</script>

<style lang="scss">
  @import './list-seq.scss'
</style>
