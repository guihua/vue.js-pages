<template>
  <div class="grid-item">
    <div class="grid-mask"></div>
    <img :src="img" alt="">
  </div>
</template>

<script>
  export default {
    name: 'grid-item',

    props: {
      img: String
    }
  }
</script>
