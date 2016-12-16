<template>
    <header class="header">
      <el-menu default-active="2" class="top-nav" mode="horizontal" @select="handleSelect" router=true>
      <el-menu-item index="1" route="/"><h1 class="logo">Live Logo</h1></el-menu-item>
      <el-menu-item index="2" route="/">首页</el-menu-item>
      <el-menu-item index="3" route="/all">全部</el-menu-item>
      <el-menu-item index="4" route="/bbs">社区</el-menu-item>
    </el-menu>
    </header>
</template>
<script>
  export default {
    name: 'TopNav',
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
<style lang="scss">
  .header {
    border-bottom: 1px solid #d1d1d1;

    .top-nav {
      width: 1200px;
      margin: 0 auto;
      background-color: #fff;

      .el-menu-item {
        font-size: 1.142rem;
      }
    }
  }
  
</style>