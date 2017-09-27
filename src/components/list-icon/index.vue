<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="list-item-icon" :class="item.icon"></div>
      <div class="list-item-text">
        <em>{{item.value}}</em>{{item.label}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-icon',

    props: {
      list: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import './list.scss';
</style>
