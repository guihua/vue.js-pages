<template>
  <div class="page page-detail">
    <cmui-header title="一达通信息">
      <div class="btn-back" @click="back">
        <cmui-icon name="arrow-left"></cmui-icon>
      </div>
    </cmui-header>
    <cmui-cells>
      <cmui-cell>
        <p>上海西翼新材料有限公司</p>
      </cmui-cell>
    </cmui-cells>
    <cmui-cells class="mod-baseinfo" title="客户基本信息">
      <cmui-cell>
        <p slot="hd">一达通状态</p>
        <p>
          <cmui-icon class="cmui-icon-status" name="up"></cmui-icon>
          <span class="cmui-status">已上行</span>
        </p>
      </cmui-cell>
      <cmui-cell>
        <p slot="hd">佣金核算主体</p>
        <p>无</p>
      </cmui-cell>
      <cmui-cell>
        <p slot="hd">客户类型</p>
        <p>一般纳税人自行开票</p>
      </cmui-cell>
      <cmui-cell>
        <p slot="hd">客户代码</p>
        <p>无</p>
      </cmui-cell>
      <cmui-cell>
        <p slot="hd">客服</p>
        <p>无</p>
      </cmui-cell>
    </cmui-cells>
    <cmui-cells>
      <cmui-cell :access="true">
        <p slot="hd">信保数据</p>
      </cmui-cell>
      <cmui-cell>
        <p slot="hd">一达通流水贷</p>
        <p>无</p>
      </cmui-cell>
    </cmui-cells>
    <cmui-cells title="客户业务追踪">
      <cmui-cell :access="true">
        <p slot="hd">客户准入</p>
        <p slot="ft">已准入</p>
      </cmui-cell>
      <cmui-cell :access="true">
        <p slot="hd">产品预审</p>
        <p slot="ft">需要 VPN</p>
      </cmui-cell>
      <cmui-cell :access="true">
        <p slot="hd">开票人预审</p>
        <p slot="ft">需要 VPN</p>
      </cmui-cell>
      <cmui-cell :access="true">
        <p slot="hd">代理出口资质预审(需要 VPN)</p>
        <p slot="ft">无</p>
      </cmui-cell>
      <cmui-cell :access="true">
        <p slot="hd">出货信息</p>
        <p slot="ft">最新下单 2016-12-15</p>
      </cmui-cell>
    </cmui-cells>
  </div>
</template>

<script>
  export default {
    components: {
      CmuiHeader: require('../common/header'),
      CmuiIcon: require('../common/icon'),
      CmuiCells: require('../common/cells'),
      CmuiCell: require('../common/cell')
    },

    methods: {
      back () {
        history.back(-1)
      }
    }
  }
</script>

<style lang="scss">
  .page-detail {
    background-color: #f2f3f7;
  }
  .btn-back {
    position: absolute;
    top: 0;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    .cmui-icon {
      font-size: 30px !important;
      color: #fff;
    }
  }
  .cmui-icon-status {
    color: #f60;
  }
  .cmui-status {
    display: inline-block;
    padding: 0 3px;
    border: 1px solid #f60;
    border-radius: 3px;
  }
  .mod-baseinfo .cmui-cell-hd {
    width: 120px;
  }
</style>
