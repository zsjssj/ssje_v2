<template>
  <div class="part">
    <div class="title">{{ parttext }}</div>
    <article>{{ partart }}</article>
  </div>
</template>

<script>
export default {
  name: 'homePart',
  props: {
    parttext: String,
    partart: String,
    msg: String
  }
}
</script>

<style scoped lang="less">
h1 {
  margin: 0 0 4vh 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.part {
  margin: 4vh auto;
  width: 40vw;
  .title {
    font-size: 4vmin;
    font-weight: 700;
  }
  article {
    font-size: 2vmin;
    font-family: 微软雅黑;
    padding: 4vh;
  }
}
</style>
