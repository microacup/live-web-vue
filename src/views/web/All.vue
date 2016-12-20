<template>
  <div class="all">
    <left-nav></left-nav>
    <div class="right-content">
      <lives-row title="在线直播" :more=false></lives-row>
    </div>
  </el-row>
</template>

<script>
  import LeftNav from '../../components/LeftNav';
  import LivesRow from '../../components/LivesRow';

  export default {
    name: 'All',
    components: {
      LeftNav,
      LivesRow,
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