<template>
  <cmui-grid class="page page-iconfont-list" title="Iconfont List">
    <div class="cmui-grid-item" v-for="(icon, i) in icons" :key="i">
      <cmui-icon :name="icon"></cmui-icon>
      <p>{{icon}}</p>
    </div>
  </cmui-grid>
</template>

<script>
  let iconList = ['data-empty', 'bangdan', 'triangle-down', 'circle-success', 'circle-undone', 'target', 'circle-question', 'data', 'time', 'store', 'img', 'live', 'warning', 'check', 'circle-warning', 'calendar', 'delete', 'circle-minus', 'circle-close', 'phone', 'attachment', 'publish', 'up', 'tag', 'plaint-question', 'loading', 'system-message', 'notice', 'refresh', 'arrow-left', 'customer', 'circle-plus', 'study', 'usual-question', 'home', 'radar', 'vip', 'time2', 'info', 'news', 'plan', 'message', 'voice', 'count-data', 'map', 'search', 'atm', 'account', 'success', 'arrow-right', 'arrow-down', 'edit', 'add-account']

  export default {
    components: {
      CmuiIcon: require('../common/icon'),
      CmuiGrid: require('../common/grid')
    },

    data () {
      return {
        icons: iconList
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-iconfont-list {
    top: 85px;
  }
</style>
