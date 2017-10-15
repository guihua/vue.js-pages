<template>
  <div class="page page-content">
    <SimpleHeader>
      <h1>小客说金融</h1>
      <div class="menu"></div>
    </SimpleHeader>
    <div class="mod content-mod">
      <h2>101期：银行上半年信贷额度已快用完，下半年贷款将更难！</h2>
      <p class="desc">
        <span>3天前</span>
        <span>文章来源：小客金融</span>
      </p>
      <img src="../../assets/img/content/banner01.png" alt="">
      <div class="words-list">
        <div class="list-item">
          <label>客户经理</label>
          <p>金融的本质是价值流通。金融产品的种类有 很多，其中主要包括银行、证券、保险、信 托等。</p>
        </div>
        <div class="list-item">
          <label>大牛</label>
          <p>金融所涉及的学术领域很广，其中主要包括： 会计、财务、投资学、银行学、证券学、保 险学、信托学等等。</p>
        </div>
        <div class="list-item">
          <audio controls autoplay src="http://www.w3school.com.cn/i/horse.ogg"></audio>
        </div>
        <div class="list-item">
          <label>背话术</label>
          <p> 金融的本质是价值流通。金融产品的种类有很多，其中主要包括银行、证券、保险、信托等。金融所涉及的学术领域很广，其中主要包括：会计、财务、投资学、银行学、证券学、保险学、信托学等等。</p>
        </div>
      </div>
      <div class="content-footer">
        <p class="keywords">练好基本功  沟通更轻松</p>
        <a href="javascript:;" class="btn-more">点击查看更多话术！</a>
        <div class="content-operate">
          <div class="operate-item">
            <div class="operate-btn btn-praise">
              <i class="icon-praise"></i>
              <span>1000</span>
            </div>
            <p>点个赞，鼓励下！</p>
          </div>
          <div class="operate-item">
            <div class="operate-btn btn-share">
              <i class="icon-share"></i>
            </div>
            <p>转发带名片哦！</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mod relative-mod">
      <h2 class="mod-hd">相关知识点</h2>
      <div class="mod-bd">
        <p class="point">金融的本质是价值流通金融的本质是价值流通金融的 本质是价值流通</p>
        <p>
          <i class="icon-read"></i>阅读<em>1000</em>
        </p>
      </div>
    </div>
    <div class="mod care-mod">
      <h2 class="mod-hd">大家都在看</h2>
      <div class="list-img">
        <div class="list-item">
          <img src="../../assets/img/content/banner01.png" alt="">
          <p><span class="status">new</span>都是很重要的标题,这块需要两行才可以都 是很重要的标题,这块需要两行才可以</p>
        </div>
        <div class="list-item">
          <img src="../../assets/img/content/banner01.png" alt="">
          <p><span class="status">new</span>都是很重要的标题,这块需要两行才可以都 是很重要的标题,这块需要两行才可以</p>
        </div>
        <div class="list-item">
          <img src="../../assets/img/content/banner01.png" alt="">
          <p><span class="status">new</span>都是很重要的标题,这块需要两行才可以都 是很重要的标题,这块需要两行才可以</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content',

    components: {
      SimpleHeader: require('../../components/header-simple')
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

  @import './content';
</style>
