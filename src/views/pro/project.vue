<template>
  <div class="page page-project">
    <project-tab class="tab" :tabs="tabs"></project-tab>
    <project-list :list="list"></project-list>
  </div>
</template>

<script>
  const tabs = ['我收到的', '我推送的']

  const lists = [{
    name: '河南顺天科技有限公司河南顺天科技有限公司',
    count: '1',
    loan: '234',
    period: '12',
    time: '2017年11月23日',
    status: '审核中'
  }, {
    name: '河南顺天科技有限公司',
    loan: '234',
    period: '12',
    time: '2017年11月23日',
    status: '已撤回'
  }, {
    name: '河南顺天科技有限公司',
    loan: '234',
    period: '12',
    time: '2017年11月23日',
    status: '已关闭'
  }]

  export default {
    name: 'project',

    components: {
      ProjectTab: require('../../components/tab-line'),
      ProjectList: require('../../components/list-project')
    },

    data () {
      return {
        tabs: tabs,
        list: lists
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
    margin-bottom: 5px;
    padding: 0 15px;
  }
</style>
