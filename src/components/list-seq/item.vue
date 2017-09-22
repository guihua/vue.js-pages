<template>
  <div class="list-seq-item">
    <div class="list-item-seq" :class="seqClass">
      <span>{{index + 1}}</span>排名
    </div>
    <div class="list-item-content">
      <h3>{{item.title}}</h3>
      <p>净利润：{{item.profit}}</p>
      <p>营业收入：{{item.income}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-seq-item',

    props: {
      index: {
        type: Number,
        default: ''
      },
      item: Object
    },

    data () {
      return {
        seqClass: 'seq-' + (this.index + 1)
      }
    }
  }
</script>
