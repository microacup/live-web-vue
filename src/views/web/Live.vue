<template>
  <div id="live-list">
    video.js - hls
    <hls-player></hls-player>

    video.js - rtmp
    <rtmp-player></rtmp-player>

    video mobile
    <native-player></native-player>
  </div>
</template>

<script>
import HlsPlayer from '../../components/HlsPlayer';
import RtmpPlayer from '../../components/RtmpPlayer';
import NativePlayer from '../../components/NativePlayer';


export default {
  name: 'Live',
  components: {
    HlsPlayer,
    RtmpPlayer,
    NativePlayer,
  },
};
</script>