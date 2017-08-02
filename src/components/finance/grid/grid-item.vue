<template>
  <div class="grid-item">
    <div class="icon" :class="[ 'icon-' + icon ]"></div>
    <h3>{{title}}</h3>
    <div class="line"></div>
    <p>{{desc1}}</p>
    <p>{{desc2}}</p>
  </div>
</template>

<script>
  export default {
    name: 'grid-item',

    props: {
      icon: Number,
      title: String,
      desc1: String,
      desc2: String
    }
  }
</script>
