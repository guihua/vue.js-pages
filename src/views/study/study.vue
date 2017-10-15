<template>
  <div class="page page-study">
    <simple-header class="bg-white">
      <div class="avatar"></div>
      <div class="search-form">
        <input type="search" v-model="keywords" placeholder="请输入标题关键词">
      </div>
    </simple-header>
    <tab class="tab-lines tab-green" :tabs="tabs"></tab>
    <list-img :data="lists"></list-img>
    <div class="banner">
      <img src="../../assets/img/study/banner01.png" alt="">
    </div>
    <list-img :data="lists"></list-img>
    <div class="banner">
      <div class="banner-hd">
        <h3>推荐专题</h3>
        <a href="javascript:;" class="icon-more">更多</a>
      </div>
      <div class="banner-bd">
        <img src="../../assets/img/study/banner02.png" alt="">
        <img src="../../assets/img/study/banner02.png" alt="">
      </div>
    </div>
    <list-img :data="lists"></list-img>
    <div class="banner">
      <div class="banner-bd">
        <img src="../../assets/img/study/banner03.png" alt="">
        <img src="../../assets/img/study/banner03.png" alt="">
        <img src="../../assets/img/study/banner03.png" alt="">
      </div>
    </div>
    <list-img :data="lists"></list-img>
    <div class="loading">
      <span>正在加载中...</span>
    </div>
  </div>
</template>

<script>
  const tabs = ['热门推荐', '天天看报', '话题谈资']

  const imgListData = [{
    title: '银行上半年信贷额已经用完，下半年贷款将更难！',
    tag: '小额金融',
    read: 123,
    praise: 123,
    img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fkb3l72rpbj206o04g408.jpg'
  }, {
    title: '银行上半年信贷额已经用完，下半年贷款将更难！',
    tag: '小额金融',
    read: 123,
    praise: 123,
    img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fkb3l72rpbj206o04g408.jpg'
  }, {
    title: '银行上半年信贷额已经用完，下半年贷款将更难！',
    tag: '小额金融',
    read: 123,
    praise: 123,
    img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fkb3l72rpbj206o04g408.jpg'
  }]

  export default {
    name: 'study',

    components: {
      SimpleHeader: require('../../components/header-simple'),
      Tab: require('../../components/tab'),
      ListImg: require('../../components/list-img')
    },

    data () {
      return {
        keywords: '',
        tabs: tabs,
        lists: imgListData
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

  @import './study';
</style>
