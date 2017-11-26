<template>
  <div class="list-item">
    <div class="list-item-hd">
      <h4>企业名称：{{item.name}}</h4>
      <span class="count" v-if="item.count">动态({{item.count}})</span>
    </div>
    <div class="list-item-bd">
      <span>贷款金额：{{item.loan}}万</span>
      <span>贷款期限：{{item.period}}月</span>
      <span>申请日期：{{item.time}}</span>
      <span>当前进度：<span class="status" :class="isActive">{{item.status}}</span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-item',

    props: {
      item: Object
    },

    computed: {
      isActive () {
        return {
          'process': this.item.status === '审核中'
        }
      }
    }
  }
</script>
