<template>
  <div>
    room
  </div>

</template>

<script>
  const socket = require('socket.io-client')('ws://localhost:7000', { transports: ['websocket'] });

  export default {
    name: 'ChatRoom',
    created() {
      socket.on('connect', () => {
        console.log('connect');
      });
    },
  };

</script>
