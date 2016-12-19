<template>
  <el-card class="live-card" :body-style="{ padding: '0px' }">
    <div class="live-cover">
      <img class="image" src="http://element.eleme.io/static/hamburger.50e4091.png">
    </div>
    <div class="card-footer">
      <img class="po-avatar" src="http://uc.qietv.douyucdn.cn/avatar.php?uid=6048607&size=small" alt="">
      <div class="live-info">
        <div class="ellipsis live-title">可爱又迷人的反派角色就是我</div>
        <span class="po-nick">zebra陈</span>
        <span class="online">1222</span>
      </div>
    </div>
  </el-card>
</template>
<style lang="scss">
  .live-card {
    .live-cover {
      &,
      img {
        width: 100%;
        height: 158px;
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
