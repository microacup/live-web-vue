<template>
  <div class="chat-room">
    <ul class="message-list">
      <li  v-for="msg in messages">{{msg}}</li>
    </ul>
    <div class="input-group">
      <textarea id="chat-message" type="textarea" :minlength="1" @keyup.enter="newMessage" :maxlength="80" :rows="2" :autosize="false"
        placeholder="这里输入聊天内容(Enter发送)" v-model="message">
      </textarea>
      <el-button type="primary" slot="append" id="submit-chat" @click="newMessage">发送</el-button>
    </div>
  </div>
</template>
<script>
  import config from '../../config';
  
  const socket = require('socket.io-client')(`${config.socket}/chatroom`, { transports: ['websocket'] });

  export default {
    name: 'ChatRoom',
    data() {
      return {
        message: '',
        messages: [],
        roomId: '1001',
      };
    },
    created() {
      socket.on('connect', () => {
        socket.emit('join', this.roomId);
        console.log(`connect ${this.roomId}`);

        socket.on('updateUsersList', (userId) => {
          this.refreshMessage(`${userId} 加入了房间`);
        });
        socket.on('addMessage', (message) => {
          console.log(`new message ${message}`);
          this.refreshMessage(message);
        });
        socket.on('userLeave', (userId) => {
          console.log(`${userId} leaved`);
          this.refreshMessage(`${userId} 离开了房间`);
        });
      });
    },
    methods: {
      newMessage() {
        socket.emit('newMessage', this.roomId, this.message);
        this.refreshMessage(this.message);
        this.message = '';
      },
      refreshMessage(message) {
        this.messages.push(message);
        setTimeout(() => {
          // 滚动
          const msglist = document.getElementsByClassName('message-list');
          const lastli = msglist[msglist.length - 1];
          lastli.scrollTop = lastli.scrollHeight;
        }, 200); // 延迟xxms,因为ui更新有延迟
      },
    },
  };

</script>
<style lang="scss">
  .chat-room {
    position: relative;
    padding-bottom: 80px;
  }
  
  .message-list {
    height: 100%;
    overflow: auto;
    padding: 0 10px;
  }
  
  .input-group {
    font-size: 0;
    padding: 0 10px;
    position: absolute;
    bottom: 10px;
    #chat-message {
      display: inline-block;
      vertical-align: middle;
      width: 240px;
      padding: 5px 7px;
      line-height: 1.5em;
      border: 1px solid #c0ccda;
      box-sizing: border-box;
      height: 60px;
      height: 60px;
      resize: none;
      border-radius: 2px 0 0 2px;

      &:focus ,&:hover {
        outline: none;
        border-color: #20a0ff;
      }

    }
    #submit-chat {
      display: inline-block;
      vertical-align: middle;
      height: 60px;
      border-radius: 0 2px 2px 0;
    }
  }

</style>
