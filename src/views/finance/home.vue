<template>
  <div class="page page-home">
    <FHeader></FHeader>
    <FChart></FChart>
    <FIntroduction></FIntroduction>
    <FFooter></FFooter>
  </div>
</template>

<script>
  export default {
    components: {
      FHeader: require('../../components/finance/header'),
      FChart: require('../../components/finance/chart'),
      FIntroduction: require('../../components/finance/introduction'),
      FFooter: require('../../components/finance/footer')
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/base';

  .row {
    margin-bottom: 100px;
    width: 100%;
    overflow: hidden;
    text-align: center;

    .container {
      position: relative;
      margin: 0 auto;
      width: 1024px;
    }
    &.footer {
      margin-bottom: 0
    }
  }
</style>
