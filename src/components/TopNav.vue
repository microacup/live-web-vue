<template>
  <header class="header">
    <div class="container">
      <div class="top-logo">
        <router-link to="/">
          <h1 class="logo">Live Logo</h1>
        </router-link>
      </div>
      <el-menu class="top-nav" mode="horizontal" :router="true">
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
        <div :class="isProfile ? 'user-profile open' : 'user-profile out'">
          <img @click="openProfile" @mouseenter="openProfile" @mouseleave="closeProfile" src="http://uc.qietv.douyucdn.cn/avatar.php?uid=6417930&size=small" />
          <div class="user-menu" @mouseenter="focusProfile" @mouseleave="closeProfile">
            <i></i>
            <div class="user-info">
              <img src="http://uc.qietv.douyucdn.cn/avatar.php?uid=6417930&size=small" alt="" />
              <div class="user-name">
                <strong class="name">小明</strong>
                <span class="info">你们啊你们</span>
              </div>
              <router-link to="/logout" class="logout">退出</router-link>
            </div>
            <!--<div class="user-balance"></div>-->
            <ul class="user-set">
              <li><router-link to="/"><i class="liveicon liveicon-profile"></i><span>个人中心</span></router-link></li>
              <li><router-link to="/"><i class="liveicon liveicon-follow"></i><span>我的关注</span></router-link></li>
              <li><router-link to="/"><i class="liveicon liveicon-setting"></i><span>直播设置</span></router-link></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </header>
</template>
<script>
  export default {
    name: 'TopNav',
    data() {
      return {
        isProfile: false,
        timer: '',
      };
    },
    methods: {
      handleSearch(v) {
        console.log(v);
      },
      openProfile() {
        this.isProfile = true;
      },
      closeProfile() {
        this.timer = setTimeout(() => { this.isProfile = false; }, 1000);
      },
      focusProfile() {
        clearInterval(this.timer);
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
    width: 100%;
    

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
        width: 240px;
      }

      &>ul {
        margin: 0;
        padding: 0;
        float: left;
        li {
          padding: 0 10px;
          float: left;
        }
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
          cursor: pointer;
        }

        &.open {
          .user-menu {
            display: block;
          }
        }

        &.out {
          .user-menu {
            animation: scale-out cubic-bezier(.22,.58,.12,.98) .4s;
          }
        }

        .user-menu {
          width: 348px;
          position: absolute;
          right: 2px;
          top: 50px;
          background: #fff;
          border: 1px solid #ecedee;
          border-radius: 5px;
          display: none;
          transition: transform .5s;
          transition: all cubic-bezier(.22,.58,.12,.98) .2s;
          transform-origin: 80% 0;
          animation: scale-in-ease cubic-bezier(.22,.58,.12,.98) .5s;
          z-index: 100;

          .logout {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 12px;
            line-height: 20px;
            color: #4a4a4a;
            letter-spacing: 0;
            text-align: left;
          }
          &>i {
            width: 14px;
            height: 14px;
            position: absolute;
            top: -9px;
            right: 10px;
            background: url(../assets/arrow-top.png) no-repeat;
          }

          .user-info {
            height: 60px;
            width: 320px;
            margin: 10px auto 5px;
            position: relative;
            &>img {
              display: inline-block;
              vertical-align: top;
              width: 60px;
              height: 60px;
            }

            .user-name {
              height: 60px;
              margin-left: 16px;
              display: inline-block;
              font-size: 12px;
              letter-spacing: normal;
              word-spacing: normal;
              vertical-align: top;

              .name {
                display: block;
                width: 210px;
                height: 20px;
                font-size: 18px;
                line-height: 20px;
                color: #4a4a4a;
                letter-spacing: 0;
                text-align: left;
              }

              .info {
                vertical-align: middle;
                margin-top: 10px;
                display: block;
                line-height: 1.5em;
              }
            }
          }
          .user-balance {
            margin: 25px 15px;
            position: relative;
          }
          .user-set {
            border-top: 1px solid #edeff0;
            height: 59px;
            margin: 0;
            padding: 0;

            li {
              display: inline-block;
              width: 33.33%;
              height: 59px;
              font-size: 12px;
              letter-spacing: normal;
              text-align: center;
              float: left;
              padding-top: 10px;
              a {
                display: block;
                font-size: 12px;
                color: #8d93a1;
                text-align: center;
                line-height: 1em;
                span {
                  display: block;
                  line-height: 14px;
                }
              }

            }
          }
        }
      }
    }
  }
  
</style>
