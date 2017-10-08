<template>
  <div class="list list-img">
    <div class="list-item" v-for="(item, i) in data" :key="i">
      <div class="list-item-bd">
        <h4 class="list-item-title">{{item.title}}</h4>
        <p class="list-item-info">
          <span class="tag">{{item.tag}}</span>
          <span class="read-count">{{item.read}}&nbsp;人阅读</span>
          <span class="praise-count">{{item.praise}}&nbsp;<i class="icon-praise"></i></span>
        </p>
      </div>
      <img :src="item.img" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-img',

    props: {
      data: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import './list';
</style>
