<template>
  <div class="about">
    <div class="main">
      <a href="#">Web</a>
      <a href="#">myself</a>
      <a href="#">Game</a>
      <a href="#">Art</a>
      <a href="#">Webgis</a>
      <a href="#">maybe Self Media</a>
      <a href="#">Sports</a>
      <a href="#">more</a>
      <a href="#">more</a>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'aboutView'
}
</script>

<style lang="less" sco>
.about {
  background-image: url(@/assets/about-bgi.jpg);
  background-size: cover;
  height: 100vh;
  padding-top: 20vh;
  a {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    text-decoration: none;
    text-align: center;
    font-size: 2vmin;
    &:hover {
      background-color: rgba(255, 255, 255, 0);
      box-shadow: 0 0 12px 8px rgba(255, 250, 241, 0.2);
    }
  }
  .main {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
    column-gap: 1.2vw;
    row-gap: 2vh;
    a:nth-child(1) {
      grid-row: 1/5;
      grid-column: 1/4;
    }
    a:nth-child(2) {
      grid-row: 1/6;
      grid-column: 4/9;
    }
    a:nth-child(3) {
      grid-row: 1/3;
      grid-column: 9/11;
    }
    a:nth-child(4) {
      grid-row: 3/6;
      grid-column: 9/11;
    }
    a:nth-child(5) {
      grid-row: 5/9;
      grid-column: 1/4;
    }
    a:nth-child(6) {
      grid-row: 6/9;
      grid-column: 4/8;
    }
    a:nth-child(7) {
      grid-row: 6/9;
      grid-column: 8/11;
    }
    a:nth-child(8) {
      grid-row: 9/11;
      grid-column: 1/6;
    }
    a:nth-child(9) {
      grid-row: 9/11;
      grid-column: 6/11;
    }
  }
}
</style>
