<template>
<div class="left-nav">
    俺是LeftNav
</div>
</template>
<script>
    export default {
      name: 'LeftNav',
      methods: {
      },
    };
</script>
<style lang="scss">
  @import '../scss/mixin';
  @import '../scss/variables';
  .left-nav {
    @include bg-dark;
    color: $text-color-white;
  }

</style>
