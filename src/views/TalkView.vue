<template>
  <div id="talk">
    <div class="liuyan">
      <h1>留言室</h1>
      <div class="talkuser">
        <img src="@/assets/user.png" alt="" />
        <span>{{ user }}</span>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model.trim="newMessage" placeholder="请输入消息内容" />
      <button type="submit">Send</button>
    </form>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <article>{{ message.name + ' : ' + message.text }}</article>
        <!-- {{ message.name + ' : ' + message.text }} -->
        <span class="messagetime">{{ message.nowtime }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: 'ssje1',
      messages: [{ id: 1, name: 'ssje', text: '欢迎留言！', nowtime: '网站部署时间：2023.5.21' }],
      newMessage: ''
    }
  },
  methods: {
    timenow() {
      return new Date().toLocaleString()
    },
    sendMessage() {
      if (this.newMessage) {
        const messageid = this.messages[this.messages.length - 1].id + 1
        this.messages.push({ id: messageid, name: this.user, text: this.newMessage, nowtime: this.timenow() })
        this.newMessage = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
#talk {
  box-sizing: border-box;
  background-image: url(@/assets/talk-bgi.jpg);
  background-size: cover;
  height: 100vh;
  padding-top: 14vh;
  .liuyan {
    position: relative;
    margin: auto;
    // display: flex;
    h1 {
      font-size: 4vmin;
      margin-bottom: 1vmin;
    }
    .talkuser {
      position: absolute;
      left: 60%;
      // transform: translateX(-100%);
      // right: 10%;
      top: 0;
      img {
        width: 6vmin;
        height: 6vmin;
        border-radius: 50%;
      }
    }
  }

  ul {
    list-style: none;
    margin: auto;
    padding-top: 0.6vh;
    height: 60vh;
    width: 60vw;
    background-color: rgba(187, 187, 187, 0.301);
    overflow: hidden auto;
    li {
      margin-left: 0.6vw;
      position: relative;
      float: left;
      clear: both;
      text-align: left;
      font-size: 1.8vmin;
      border: 1px solid rgba(22, 106, 203, 0.5);
      border-radius: 1vmin;
      margin-bottom: 2vh;
      padding: 0 4px;
      .messagetime {
        display: block;
        text-align: left;
        position: absolute;
        font-size: 1.4vmin;
        width: 60vw;
      }
    }
  }
  form {
    input[type='text'] {
      height: 40px;
      width: 40vw;
      outline: none;
      box-sizing: border-box;
    }
    button {
      // vertical-align: middle;
      height: 40px;
      width: 20vw;
    }
  }
}
</style>
