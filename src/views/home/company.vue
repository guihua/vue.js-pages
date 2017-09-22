<template>
  <div class="page page-home">
    <rank-header></rank-header>
    <rank-list :listData="listData"></rank-list>
  </div>
</template>

<script>
  const listData = [{
    title: '2017 企业排行榜',
    list: [{
      title: '福布斯世界五百强排行',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx2.sinaimg.cn/mw690/50387858ly1fjlme11y6oj20jq04g75w.jpg'
    }, {
      title: '中国互联网企业 100 强排行',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fjlmjfurcqj20jq04gdk9.jpg'
    }, {
      title: '中国建筑企业 500 强排行',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fjlmjgnsjrj20jq04g794.jpg'
    }, {
      title: '世界五百强排行',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx1.sinaimg.cn/mw690/50387858ly1fjlmjh6h02j20jq04gtc4.jpg'
    }, {
      title: '中国金融企业资产 100 强',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fjlmjhnyqlj20jq04g42d.jpg'
    }]
  }, {
    title: '2016 企业排行榜',
    list: [{
      title: '福布斯世界五百强排行',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx2.sinaimg.cn/mw690/50387858ly1fjlme11y6oj20jq04g75w.jpg'
    }, {
      title: '中国互联网企业 100 强排行',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fjlmjfurcqj20jq04gdk9.jpg'
    }, {
      title: '中国建筑企业 500 强排行',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fjlmjgnsjrj20jq04g794.jpg'
    }, {
      title: '世界五百强排行',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx1.sinaimg.cn/mw690/50387858ly1fjlmjh6h02j20jq04gtc4.jpg'
    }, {
      title: '中国金融企业资产 100 强',
      from: '发布机构：xxxxxx',
      timestamp: '发布时间：' + dateFormat(),
      img: 'http://wx3.sinaimg.cn/mw690/50387858ly1fjlmjhnyqlj20jq04g42d.jpg'
    }]
  }]

  function dateFormat () {
    const date = new Date()
    const dateArray = []

    dateArray.push(date.getFullYear())
    dateArray.push(date.getMonth() + 1)
    dateArray.push(date.getDay())

    return dateArray.join('-')
  }

  export default {
    components: {
      RankHeader: require('../../components/header'),
      RankList: require('../../components/list')
    },

    data () {
      return {
        listData: listData
      }
    }
  }
</script>

<style lang="scss">
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
