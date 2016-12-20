<template>
  <el-card class="live-card" :body-style="{ padding: '0px' }">
    <a href="javascript:;" class="card-target">
      <div class="live-cover">
        <div class="control"></div>
        <div class="tag tag-live">Live</div>
        <img class="image" src="http://element.eleme.io/static/hamburger.50e4091.png">
      </div>
      <div class="card-footer">
        <img class="po-avatar" src="http://uc.qietv.douyucdn.cn/avatar.php?uid=6048607&size=small" alt="">
        <div class="live-info">
          <div class="ellipsis live-title">可爱又迷人的反派角色就是我又闪人不眨眼</div>
          <span class="po-nick">zebra陈</span>
          <span class="online">1222</span>
        </div>
      </div>
    </a>
  </el-card>
</template>
<style lang="scss">
  .live-card {
    a:hover {
      .control {
        top: 50%;
        opacity: 1;
        filter: alpha(opacity=100);
        z-index: 1;
      }
    }
    .live-cover {
      position: relative;
      &,
      img {
        width: 100%;
        height: 158px;
      }

      .tag {
        position: absolute;
        height: 20px;
        font-size: 12px;
        color: #fff;
        right: 5px;
        top: 5px;
        padding: 0 5px;
        border-radius: 2px;

        &.tag-live {
          background-color: #e70c0c;
        }
      }

      .control {
        display: block;
        width: 50px;
        height: 50px;
        background: url(../assets/play-bj.png) no-repeat;
        position: absolute;
        top: 80%;
        left: 50%;
        margin-top: -25px;
        margin-left: -25px;
        opacity: 0;
        filter: alpha(opacity=0);
        transition: all .3s ease;
      }
    }
    .card-footer {
      position: relative;
      height: 60px;
      padding: 9px 10px 9px 60px;
      background: #f4f6f8;
      cursor: pointer;
    }
    .po-avatar {
      width: 41px;
      height: 41px;
      border-radius: 50%;
      position: absolute;
      left: 10px;
      top: 9px;
    }
    .po-nick {
      font-size: 12px;
    }
    .live-title {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .online {
      width: auto;
      min-width: 17px;
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      position: absolute;
      right: 10px;
      z-index: 1;
      display: inline-block;
      padding-left: 18px;
      color: #8d93a1;
      font-size: 12px;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: middle;
      background: url(../assets/ued-icon.png) -55px -457px no-repeat;
    }
  }

</style>
