<template>
  <div class="page page-detail">
    <h1>2017 年企业排行榜</h1>
    <list-seq :list="listData"></list-seq>
  </div>
</template>

<script>
  const listData = [{
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }, {
    title: '沃尔玛（WAL-MART STORES)',
    profit: '14694 百万美元',
    income: '482130 百万美元'
  }]

  export default {
    components: {
      ListSeq: require('../../components/list-seq')
    },

    data () {
      return {
        listData: listData
      }
    }
  }
</script>

<style lang="scss">
  @import './detail.scss';
</style>
