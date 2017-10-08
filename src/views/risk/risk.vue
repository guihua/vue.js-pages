<template>
  <div class="page page-risk">
    <risk-header>
      <h1>客户管理</h1>
    </risk-header>
    <risk-article title="我的客户">
      <risk-list :list="list"></risk-list>
    </risk-article>
    <risk-article title="客户动态">
      <risk-tab :tabs="tabs"></risk-tab>
      <risk-module :module="module"></risk-module>
      <risk-module :module="module"></risk-module>
    </risk-article>
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

  const modulesData = {
    mtitle: '09-06',
    article: [{
      hd: '大连万达股份有限公司',
      list: [{
        title: '标题111111111',
        status: '行政处罚',
        content: '一场秋雨一场寒一场秋雨一场寒一场秋雨一场寒一场秋雨一场寒'
      }, {
        title: '标题111111111',
        status: '行政处罚',
        content: '一场秋雨一场寒一场秋雨一场寒一场秋雨一场寒一场秋雨一场寒'
      }]
    }, {
      hd: '大连万达股份有限公司',
      list: [{
        title: '标题111111111',
        status: '行政处罚',
        content: '一场秋雨一场寒一场秋雨一场寒一场秋雨一场寒一场秋雨一场寒'
      }, {
        title: '标题111111111',
        status: '行政处罚',
        content: '一场秋雨一场寒一场秋雨一场寒一场秋雨一场寒一场秋雨一场寒'
      }]
    }]
  }

  export default {
    name: 'risk',

    components: {
      RiskHeader: require('../../components/header-simple'),
      RiskArticle: require('../../components/risk-article'),
      RiskList: require('../../components/list-icon'),
      RiskTab: require('../../components/tab'),
      RiskModule: require('../../components/risk-module')
    },

    data () {
      return {
        list: listData,
        tabs: tabs,
        module: modulesData
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
    background-color: #f8f8f8;
  }
  .tab {
    padding: 0 20px;
  }
</style>
