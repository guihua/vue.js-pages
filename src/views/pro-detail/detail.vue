<template>
  <div class="page page-detail">
    <simple-header class="bg-white">
      <a href="" class="btn-back"></a>
      <h1>XXX公司</h1>
      <div class="btn-menu">
        <div class="tips">
          <span>10</span>
        </div>
      </div>
    </simple-header>
    <article class="detail-article">
      <div class="article-hd">
        <h2>申请信息</h2>
      </div>
      <div class="article-bd detail-info">
        <span>企业名称：河南顺天科技有限公司</span>
        <span>申请日期：2017年11月23日</span>
        <span>当前进度：审核中</span>
        <span>贷款金额：234万</span>
        <span>贷款期限：12月</span>
        <span>担保方式：房屋抵押</span>
        <span>当前进度：>7%</span>
        <span>房屋估值：300万</span>
        <span>XXXXXX：XXXX</span>
      </div>
    </article>
    <article class="detail-article">
      <div class="article-hd">
        <h2>项目资料</h2>
      </div>
      <div class="article-bd">
        <ul class="list">
          <li>
            <i class="icon icon-file1"></i>
            <span>企业尽调报告</span>
          </li>
          <li>
            <i class="icon icon-file2"></i>
            <span>企业财报1</span>
          </li>
          <li>
            <i class="icon icon-file2"></i>
            <span>企业财报2</span>
          </li>
        </ul>
      </div>
    </article>
    <footer class="fixed-bottom">
      <a href="" class="btn-detail">查看企业详情</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'project-detail',

    components: {
      SimpleHeader: require('../../components/header-simple')
    },

    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
