<template>
  <header class="header">
    <div class="container">
      <div class="top-logo">
        <router-link to="/">
          <h1 class="logo">Live Logo</h1>
        </router-link>
      </div>
      <el-menu class="top-nav" mode="horizontal" @select="handleSelect" :router="true">
        <el-menu-item index="1" :class="$route.path === '/' ? 'is-active' : ''" :route="{ path: '/' }">首页</el-menu-item>
        <el-menu-item index="2" :class="$route.path === '/all' ? 'is-active' : ''" :route="{ path: '/all' }">直播</el-menu-item>
        <el-menu-item index="3" :route="{ path: '/bbs' }">社区</el-menu-item>
      </el-menu>
      <div class="top-user">
        <el-input class="top-search-input" placeholder="搜房间号/房间名" icon="search" @click="handleSearch">
        </el-input>
        <ul>
          <li class="o-history"><a href="javascript:;"><i class="el-icon-time"></i> 历史</a></li>
          <li class="o-follow">
            <router-link to="/"><i class="el-icon-star-on"> 我的关注</router-link></li>
        </ul>
        <div class="user-profile">
          <img src="http://uc.qietv.douyucdn.cn/avatar.php?uid=6417930&size=small" />
        </div>
      </div>
      </div>
    </header>
</template>
<script>
  export default {
    name: 'TopNav',
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSearch(v) {
        console.log(v);
      },
    },
  };
</script>
<style lang="scss">
  .header {
    border-bottom: 1px solid #d1d1d1;
    background-color: #fff;
    height: 61px;
    line-height: 61px;

    .container>* {
      float: left;
    }

    .top-nav {
      background-color: #fff;
      margin: 0 20px;
      font-weight: bold;

      .el-menu-item {
        font-size: 1.142rem;
        &:hover {
          border-bottom: 0 solid transparent;
        }
      }
      
    }

    .top-user {
      float: right;
      .top-search-input {
        margin: 12px 12px;
        float: left;
      }

      ul {
        margin: 0;
        padding: 0;
        float: left;
      }

      li {
        padding: 0 10px;
        float: left;
      }

      .user-profile {
        float: right;
        position: relative;
        top: 10px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: block;
        }
      }
    }
  }
  
</style>
