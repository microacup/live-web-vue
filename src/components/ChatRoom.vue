<template>
  <div>
    room

    <button @click="newRoom">newRoom</button>
  </div>

</template>

<script>
  const socket = require('socket.io-client')('ws://localhost:7000/chatroom', { transports: ['websocket'] });

  export default {
    name: 'ChatRoom',
    data() {
      return {
        roomId: '1001',
      };
    },
    created() {
      socket.on('connect', () => {
        socket.emit('join', this.roomId);
        console.log(`connect ${this.roomId}`);

        socket.on('updateUsersList', (userId) => {
          console.log(`${userId} 加入了房间`);
        });
        socket.on('addMessage', (message) => {
          console.log(`new message ${message}`);
        });
        socket.on('userLeave', (userId) => {
          console.log(`${userId} leaved`);
        });
      });
    },
    methods: {
      newRoom() {
        socket.emit('newMessage', this.roomId, '哈哈哈');
      },
    },
  };

</script>
