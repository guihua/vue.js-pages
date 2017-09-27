<template>
  <div class="page page-risk">
    <risk-header>
      <h1>客户管理</h1>
    </risk-header>
    <risk-mod title="我的客户">
      <risk-list :list="list"></risk-list>
    </risk-mod>
    <risk-mod title="客户动态">
      <risk-tab :tabs="tabs"></risk-tab>
    </risk-mod>
  </div>
</template>

<script>
  const listData = [{
    icon: 'count',
    label: '浏览过',
    value: 333
  }, {
    icon: 'star',
    label: '关注中',
    value: 333
  }, {
    icon: 'heart',
    label: '监控中',
    value: 333
  }]

  const tabs = ['风险信息', '商业机会', '新闻舆情']

  export default {
    name: 'risk',

    components: {
      RiskHeader: require('../../components/header-2'),
      RiskMod: require('../../components/risk-mod'),
      RiskList: require('../../components/list-icon'),
      RiskTab: require('../../components/tab')
    },

    data () {
      return {
        list: listData,
        tabs: tabs
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/base';

  .page {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    background-color: #fff;
  }
</style>
