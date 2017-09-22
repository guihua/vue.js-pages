<template>
  <header>
    <div class="search-form">
      <input type="search" class="search-input" v-model="keywords" placeholder="搜索文案">
      <div @click="search">
        <cmui-icon class="search-btn" name="search"></cmui-icon>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    components: {
      CmuiIcon: require('../icon')
    },

    data () {
      return {
        keywords: ''
      }
    },

    methods: {
      search () {
        if (!this.keywords) {
          return
        }
        console.log(this.keywords)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './header.scss';
</style>
