<template>
  <div class="index">
    <div class="banner">
      <div class="container">
        <carousel></carousel>
      </div>
    </div>

    <lives-row title="正在直播" more></lives-row>
    <lives-row title="精彩推荐" more></lives-row>
  </div>
</template>
<script>
  import Carousel from '../../components/Carousel';
  import Hots from '../../components/Hots';
  import LivesRow from '../../components/LivesRow';

  export default {
    name: 'Index',
    components: {
      Carousel,
      Hots,
      LivesRow,
    },
  };
</script>
<style lang="scss">
  .banner {
    background: url(http://staticlive.qietv.douyucdn.cn/upload/7643acd87c23669c2f12d2ec9fbfbc1b.jpg) center top no-repeat;
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>