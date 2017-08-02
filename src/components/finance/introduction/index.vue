<template>
  <section class="row intro">
    <div class="container">
      <FGrid>
        <grid-item :icon="1" title="随时随地" desc1="在线应用无需安装" desc2="随时随地轻松协同操作"></grid-item>
        <div class="grid-item">
          <div class="grid-mask"></div>
          <img src="../../../assets/img/grid01.png" alt="">
        </div>
        <grid-item :icon="2" title="尽调报告自动生成" desc1="关联财务分析报告" desc2="一键自动生成尽调报告"></grid-item>
        <div class="grid-item">
          <div class="grid-mask"></div>
          <img src="../../../assets/img/grid02.png" alt="">
        </div>
        <div class="grid-item">
          <div class="grid-mask"></div>
          <img src="../../../assets/img/grid03.png" alt="">
        </div>
        <grid-item :icon="3" title="自动高效" desc1="财务报表核算轻松搞定" desc2="分析报告自动生成"></grid-item>
        <div class="grid-item">
          <div class="grid-mask"></div>
          <img src="../../../assets/img/grid04.png" alt="">
        </div>
        <grid-item :icon="4" title="精确计算" desc1="系统自动嵌入公式" desc2="财务指标计算一键完成"></grid-item>
      </FGrid>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
      FGrid: require('../grid'),
      GridItem: require('../grid/grid-item'),
      GridImg: require('../grid/grid-img')
    }
  }
</script>


<style lang="scss">
  .grid {
    background-color: #204164;
  }
  @import './intro';
</style>
