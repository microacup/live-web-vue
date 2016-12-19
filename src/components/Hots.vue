<template>
  <div class="section-hots">
    <div class="container">
      <h2 class="title">热门直播</h2>
      <div class="content">
        <div class="prev">
          <a href="javascript:;"></a>
        </div>
        <div class="next">
          <a href="javascript:;"></a>
        </div>
        <div class="inner">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .section-hots {
    width: 100%;
    opacity: .6;
    background: #0b0c10;
    height: 212px;
    .title {
      height: 60px;
      line-height: 60px;
      margin: 0 auto 7px;
      padding-left: 30px;
      background: url(../assets/index-hot.png) left center no-repeat;
      color: #fdfdfd;
    }
    .content {
      position: relative;
      .prev, .next {
      position: absolute;
      z-index: 1;
      width: 25px;
      background: #313139;
      height: 109px;
      top: 0;
      cursor: pointer;

      a {
        display: block;
        width: 10px;
        height: 20px;
        background: url(../assets/ued-icon.png) -355px -333px no-repeat;
        margin: 47px 8px;
      }
    }
    .prev {
      left: 0;

      &:hover {
        a {
          background-position: -355px -373px;
        }
      }
      a {
        background-position: -355px -333px;
      }
    }
    .next {
      right: 0;
      a {
        background-position: -400px -333px;
      }
      &:hover {
        a {
          background-position: -400px -373px;
        }
      }
    }
    }
  }

</style>
