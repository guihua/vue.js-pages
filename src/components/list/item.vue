<template>
  <div class="list-item">
    <img class="list-item-bg" :src="item.img" :alt="item.title">
    <div class="list-item-content">
      <h3>{{item.title}}</h3>
      <p>
        <span>{{item.from}}</span>
        <span class="timestamp">{{item.timestamp}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-item',

    props: {
      item: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import './item.scss';
</style>
