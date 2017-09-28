<template>
  <section class="module-list">
    <h3 class="module-title">{{module.mtitle}}</h3>
    <risk-item v-for="(art, i) in module.article" :key="i" :data="art"></risk-item>
  </section>
</template>

<script>
  export default {
    name: 'risk-module',

    components: {
      RiskItem: require('./item.vue')
    },

    props: {
      module: Object
    }
  }
</script>

<style lang="scss">
  @import './module';
</style>
