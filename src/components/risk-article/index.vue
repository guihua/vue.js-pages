<template>
  <article class="mod">
    <div class="mod-hd">
      <h3 class="mod-title">{{title}}</h3>
    </div>
    <div class="mod-bd">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'mod',

  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './mod.scss';
</style>
