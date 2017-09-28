<template>
  <div class="module-item">
    <h4 class="module-item-hd">{{data.hd}}</h4>
    <sub-item v-for="(item, i) in data.list" :key="i" :item="item"></sub-item>
  </div>
</template>

<script>
  export default {
    name: 'mitem',

    components: {
      SubItem: require('./sub-item.vue')
    },

    props: {
      data: Object
    }
  }
</script>
