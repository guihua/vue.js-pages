<template>
  <div class="page page-customer-list">
    <cmui-list>
      <li class="cmui-list-item" v-for="item in list" :key="item.id" @click="route(item.id)">
        <figure v-if="item.img">
          <img :src="item.img" alt="">
        </figure>
        <div
          :class="[
            'cmui-' + item.type,
            item.active ? 'active' : ''
          ]"
          v-if="item.type">
          <span v-if="item.type == 'sequence'">{{item.id}}</span>
        </div>
        <div class="cmui-list-item-bd">
          <h3 class="cmui-list-item-title">{{item.title}}</h3>
          <p>{{item.desc}}</p>
          <p>{{item.author}}</p>
        </div>
      </li>
    </cmui-list>
  </div>
</template>

<script>
  const listData = [{
    id: 1,
    title: '阿里巴巴',
    desc: '阿里巴巴和四十多道',
    author: 'abc'
  }, {
    id: 2,
    title: '支付宝',
    desc: '发顺丰公布收款码立刻',
    author: 'abc'
  }, {
    id: 3,
    img: 'http://photo.taobao.net/uploads/thumbnail/94122d60c56e5058cffcc891231839d4/2.jpg',
    title: '支付宝',
    desc: '发顺丰公布收款码立刻',
    author: 'abc'
  }, {
    id: 4,
    img: 'http://photo.taobao.net/uploads/thumbnail/74cfbe20d14a185eb60d75960d69bf64/2.jpg',
    title: '支付宝',
    desc: '发顺丰公布收款码立刻',
    author: 'abc'
  }, {
    id: 5,
    type: 'node',
    active: true,
    title: '支付宝',
    desc: '发顺丰公布收款码立刻',
    author: 'abc'
  }, {
    id: 6,
    type: 'node',
    title: '支付宝',
    desc: '发顺丰公布收款码立刻',
    author: 'abc'
  }, {
    id: 7,
    type: 'sequence',
    active: true,
    title: '支付宝',
    desc: '发顺丰公布收款码立刻',
    author: 'abc'
  }, {
    id: 8,
    type: 'sequence',
    title: '支付宝',
    desc: '发顺丰公布收款码立刻',
    author: 'abc'
  }]

  export default {
    components: {
      CmuiList: require('../common/list')
    },

    data () {
      return {
        list: listData
      }
    },

    methods: {
      route (id) {
        location.href = '/detail.html?id=' + id
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-customer-list {
    top: 45px;

    .cmui-list:before {
      border-top: 0;
    }
  }
  .cmui-list-item {
    display: flex;

    figure {
      margin-right: 10px;

      img {
        max-width: 100px;
      }
    }
    .cmui-node {
      margin: 6px 10px 0 10px;
      width: 10px;
      height: 10px;
      background-color: #f2f3f7;
      border-radius: 50%;

      &.active {
        background-color: #f60;
      }
    }
    .cmui-sequence {
      margin: 6px 10px 0 0;
      width: 20px;
      text-align: center;
      color: #333;
      font-size: 12px;

      &.active {
        color: #f60;
      }
    }
    &-bd {
      flex: 1;
    }
    &-title {
      font-weight: normal;
      font-size: 16px;
      color: #333;
    }
  }
</style>

