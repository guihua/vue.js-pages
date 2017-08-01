<template>
  <header class="cmui-header">
    <h1>{{title}}</h1>
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'header',

    props: {
      title: {
        type: String,
        default: '标题'
      }
    },

    methods: {
      back () {
        history.back()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './header';
</style>
