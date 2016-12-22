<template>
  <div class="live-room">
    <div class="room-main">
      <div class="room-header">
        <img class="po-avatar" src="http://uc.qietv.douyucdn.cn/avatar.php?uid=228553&size=middle" alt=""/>
        <div class="room-info">
          <h2 class="room-title clearfix">欧冠经典回顾</h2>
          <ul class="room-else clearfix">
            <li class="po-name">老徐</li>
            <li class="po-count"><i class="liveicon liveicon-online"></i> <span>1024</span></li>
            <li class="po-cate"><i class="liveicon liveicon-cate"></i> 体育</li>
          </ul>
        </div>
        <div class="btn-group">
          <div class="focus-box"></div>
          <div class="share-box"></div>
        </div>
      </div>
      <div class="room-body">
        <div class="live-player"><ne-player></ne-player></div>
        <!--<div class="room-actions">礼物区</div>-->
        <div class="room-events">
          <h2>官方活动</h2>
          <el-row class="events-body">
            <el-col class="event-item" :span="6">
              <a href="javascript:;"><img src="http://staticlive.qietv.douyucdn.cn/upload/signs/201609051346242455.jpg" alt=""></a>
            </el-col>
            <el-col class="event-item" :span="6">
              <a href="javascript:;"><img src="http://staticlive.qietv.douyucdn.cn/upload/signs/201607221756109785.jpg" alt=""></a>
            </el-col>
            <el-col class="event-item" :span="6">
              <a href="javascript:;"><img src="http://staticlive.qietv.douyucdn.cn/upload/signs/201607221757255417.jpg" alt=""></a>
            </el-col>
            <el-col class="event-item" :span="6">
              <a href="javascript:;"><img src="http://staticlive.qietv.douyucdn.cn/upload/signs/201609051347561417.jpg" alt=""></a>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="room-chat">
      <el-tabs type="border-card">
        <el-tab-pane label="贡献周榜">贡献周榜</el-tab-pane>
        <el-tab-pane label="贡献总榜">贡献总榜</el-tab-pane>
        <el-tab-pane label="直播公告">直播公告</el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
  import NePlayer from '../../components/NePlayer';

  export default {
    name: 'Live',
    components: {
      NePlayer,
    },
  };
</script>
<style lang="scss">
  .live-room {
    display: flex; 
    padding: 10px 20px;

    .room-main {
      flex: 1;
      margin: 0 20px 0 0;
    
      .room-header {
        height: 60px;
        position: relative;
        margin-bottom: 20px;

        .room-info {
          margin-left: 70px;

          li {
            float: left;
            margin-right: 25px;
          }
        }

        .room-else {
          margin: 0;
          padding: 0;
          font-size: 12px;
        }

        .room-title {
          margin: 0;
          padding: 0;
          line-height: 36px;
        }

        .po-avatar {
          border-radius: 50%;
          height: 60px;
          width: 60px;
          position: absolute;
          left: 0;
          top: 0;
          margin: 0;
        }
      }

      .live-player {
        width: calc(100vw - 400px);
        /*16:9*/
        height: calc(56.25vw - 225px); 

        .video-js {
          width: 100%;
          height: 100%;

        }
      }

      .room-events {
        .events-body {
          margin: 0 -10px;
          .event-item {
            padding: 0 10px;
            a, img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
    }
    .room-chat {
      background: #fff;
      flex: 0 0 320px;

      .el-tabs {
        width: 100%;
        height: 100%;
      }

      .el-tabs__header {
        display: flex;
      }
      .el-.el-tabs__item {
        flex: 1;
      }
    }
  }
</style>