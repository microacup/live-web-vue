<template>
  <video-player :options="videoOptions"></video-player>
</template>

<script>
  export default {
    name: 'Player',
    data() {
      return {
        videoOptions: {
          source: {
            type: 'application/x-mpegURL',
            src: 'http://pullhlsd91c0168.live.126.net/live/c92a188db29b49858b48196f317cedc3/playlist.m3u8',
            withCredentials: false,
          },
          live: true,
          autoplay: false,
        },
      };
    },
  };

</script>