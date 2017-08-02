<template>
  <div class="page page-home">
    <cmui-header title="一达通">
      <div class="btn-back" @click="back">
        <cmui-icon name="arrow-left"></cmui-icon>
      </div>
    </cmui-header>
    <transition :name="transition">
      <cmui-detail></cmui-detail>
    </transition>
  </div>
</template>

<script>
  export default {
    components: {
      CmuiHeader: require('../../components/common/header'),
      CmuiIcon: require('../../components/common/icon'),
      CmuiDetail: require('../../components/mdetail/detail')
    },

    data () {
      return {
        transition: 'slide'
      }
    },

    methods: {
      back (e) {
        console.log(e)
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
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to  {
    transform: translateX(10px);
    opacity: 0;
  }
  .slide-enter-active {
    animation: slideInRight .3s ease-in-out;
  }
  .slide-leave-active {
    animation: slideInRight .8s ease-out reverse;
  }
  @keyframes slideInRight {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .btn-back, .btn-search {
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
  .btn-search {
    right: 0;

    .cmui-icon {
      font-size: 20px !important;
    }
  }
</style>
