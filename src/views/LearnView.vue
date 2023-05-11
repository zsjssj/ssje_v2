<template>
  <div id="learn">
    <h1>Chat</h1>
    <ul>
      <li v-for="message in paginatedMessages" :key="message.id">
        <div class="message">
          <div class="avatar">
            <img :src="message.avatar" />
          </div>
          <div class="content">
            <div class="header">
              <span class="name">{{ message.name }}</span>
              <span class="time">{{ message.time }}</span>
            </div>
            <div class="text">{{ message.text }}</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="currentPage--">Previous</button>
      <button :disabled="currentPage === pageCount" @click="currentPage++">Next</button>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import VuePaginate from 'vue-paginate'
// import VueScrollTo from 'vue-scrollto'
// import VueSearchBar from 'vue-search-bar'
import avatar1 from '@/assets/about-bgi.jpg'
import avatar2 from '@/assets/addWeChat.jpg'

// Vue.use(VuePaginate)
// Vue.use(VueScrollTo)
// Vue.use(VueSearchBar)

export default {
  name: 'learnWiew',
  data() {
    return {
      messages: [
        { id: 1, name: 'Alice', avatar: avatar1, text: 'Hello!', time: '2021-01-01 10:00:00' },
        { id: 2, name: 'Bob', avatar: avatar2, text: 'How are you?', time: '2021-01-01 10:01:00' },
        { id: 3, name: 'Alice', avatar: avatar1, text: 'I am fine, thank you.', time: '2021-01-01 10:02:00' },
        { id: 4, name: 'Bob', avatar: avatar2, text: 'That is good to hear.', time: '2021-01-01 10:03:00' },
        { id: 5, name: 'Alice', avatar: avatar1, text: 'What are you up.', time: '2021-01-01 10:03:50' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#learn {
  padding-top: 20vh;
}
</style>
