<template>
  <div class="carousel">
    <div class="carousel-model">
      <ul class="carousel-content" :style="{'transform': 'translate3d(' + -(index * 995) + 'px, 0, 0)','width': '' + (5 * 995) + 'px'}">
        <li v-for="carousel in carousels" @mouseover="end" @mouseout="start">
          <a :href="carousel.url" target="_blank"><img class="carousel-player" :src="carousel.img" alt=""></a>
        </li>
      </ul>
    </div>
    <ul class="slider-bar">
      <li bar="bar" v-for="(carousel, $index) in carousels" :class="{'on': $index === index}" @click="go($index)" @mouseover="end"
        @mouseout="start">
        <a href="javascript:;">
          <img :src="carousel.thumbnail" alt="">
          <div class="border"></div>
          <div class="text">
            <span>{{carousel.text}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'carousel',
  data() {
    return {
      index: 0,
      timer: '',
      carousels: [
        {
          text: '中式台球中国精英赛',
          url: 'http://www.baidu.com',
          img: 'http://p1.bpimg.com/567571/069b169fe722313b.jpg',
          thumbnail: 'http://staticlive.qietv.douyucdn.cn/upload/homeset/201612191030364155.jpg',
        },
        {
          text: '足球经典',
          url: 'http://www.baidu.com',
          img: 'http://p1.bpimg.com/567571/6de8ea77377dc468.jpg',
          thumbnail: 'http://staticlive.qietv.douyucdn.cn/upload/homeset/201612191018449865.jpg',
        },
        {
          text: '最真实的格斗，啊啊啊啊，打死人啦！好可怕。',
          url: 'http://www.baidu.com',
          img: 'http://p1.bpimg.com/567571/578c5c39b2f1e41f.jpg',
          thumbnail: 'http://staticlive.qietv.douyucdn.cn/upload/homeset/201612191020152941.jpg',
        },
        {
          text: '最真实的格斗，啊啊啊啊，打死人啦！好可怕。',
          url: 'http://www.baidu.com',
          img: 'http://p1.bpimg.com/567571/5fb73e6f4aa95ee3.jpg',
          thumbnail: 'http://staticlive.qietv.douyucdn.cn/upload/homeset/201612191020152941.jpg',
        },
        {
          text: '最真实的格斗，啊啊啊啊，打死人啦！好可怕。',
          url: 'http://www.baidu.com',
          img: 'http://p1.bpimg.com/567571/1488a6ee2bbbafd6.jpg',
          thumbnail: 'http://staticlive.qietv.douyucdn.cn/upload/homeset/201612191020152941.jpg',
        },
      ],
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    go(i) {
      this.index = i;
    },
    end() {
      clearInterval(this.timer);
    },
    start() {
      this.timer = setInterval(() => {
        this.index = this.index >= 2 ? 0 : this.index += 1;
      }, 3000);
    },
    mounted() {
      // 启动定时器
      this.start();
    },
    destory() {
      this.end();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $carousel-width: 995px;
  $carousel-height: 570px;
  %carouselsize {
    width: $carousel-width;
    height: $carousel-height;
    margin: 0;
  }
  
  img,
  ul,
  li {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
  }
  
  .carousel {
    position: relative;
    .carousel-model {
      background-color: #0c0c0c;
      width: $carousel-width;
      height: $carousel-height;
      overflow: hidden;
      .carousel-content {
        width: 3 * $carousel-width;
        height: $carousel-height;
        transition: transform .3s cubic-bezier(.86, 0, .07, 1), -webkit-transform .3s cubic-bezier(.86, 0, .07, 1);
        transform: translate3d(0, 0, 0);
        li {
          @extend %carouselsize;
          float: left;
        }
        a,
        .carousel-player {
          @extend %carouselsize;
          position: relative;
          display: inline-block;
        }
      }
    }
    .slider-bar {
      position: absolute;
      right: 0;
      top: 0;
      width: 205px;
      height: $carousel-height;
      overflow: hidden;
      padding: 10px 5px;
      background-color: #0c0c0c;
      li {
        margin-bottom: 10px;
        cursor: pointer;
        height: 102px;
        float: right;
        width: 185px;
        a {
          position: relative;
          display: block;
          width: 185px;
          height: 100%;
          cursor: pointer;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
          .border {
            position: absolute;
            width: 190px;
            height: 100%;
            z-index: 1;
            top: 0;
            left: -5px;
            display: none;
            cursor: pointer;
            background: url(../assets/channel-item-active.png) center right;
          }
          .text {
            position: absolute;
            width: 100%;
            height: 19px;
            bottom: 0;
            text-indent: 8px;
            line-height: 17px;
            display: none;
            z-index: 2;
            opacity: .6;
            filter: Alpha(Opacity="60");
            background: #000;
            z-index: 0;
            span {
              color: #fff;
              font-size: 12px;
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              right: 0;
              bottom: 0;
              z-index: 1;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        &:hover, &.on {
          .text {
            display: block;
          }
          .border {
            display: block;
          }
        }
      }
    }
  }

</style>
