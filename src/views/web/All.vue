<template>
  <el-row type="flex" class="all">
    <left-nav></left-nav>
  </el-row>
</template>

<script>
  import LeftNav from '../../components/LeftNav';

  export default {
    name: 'All',
    components: {
      LeftNav
    }
  };
</script>

<style lang="scss">
  .all {
    min-height: calc(100vh - 62px);
    
    .left-nav {
        flex: 0 0 200px;
    }
  }
</style>