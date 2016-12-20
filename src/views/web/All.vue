<template>
  <div class="all">
    <left-nav></left-nav>
    <div class="right-content">
    </div>
  </el-row>
</template>

<script>
  import LeftNav from '../../components/LeftNav';

  export default {
    name: 'All',
    components: {
      LeftNav,
    },
  };
</script>

<style lang="scss">
  .all {
    display: flex;

    .left-nav {
        flex: 0 0 200px;
    }

    .right-content {
      flex: 1;
    }
  }
</style>