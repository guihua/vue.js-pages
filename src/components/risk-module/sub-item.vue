<template>
  <div class="module-sitem">
    <div class="module-sitem-title">
      <span>{{item.title}}</span>
      <span class="module-sitem-status">{{item.status}}</span>
    </div>
    <p>{{item.content}}</p>
  </div>
</template>

<script>
  export default {
    name: 'sitem',

    props: {
      item: Object
    }
  }
</script>
