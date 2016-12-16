<template>
  <video-player :options="videoOptions"></video-player>
</template>

<script>
  export default {
    name: 'RTMPPlayer',
    data() {
      return {
        videoOptions: {
          source: {
            type: 'rtmp/mp4',
            src: 'rtmp://vd91c0168.live.126.net/live/c92a188db29b49858b48196f317cedc3',
            withCredentials: false,
          },
          live: true,
          autoplay: false,
        },
      };
    },
  };
</script>