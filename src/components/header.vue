<template>
  <div class="heads" >
    <router-link to="/home" tag="li" active-class="head_online">新闻</router-link>
    <router-link to="/jock" tag="li" active-class="head_online">娱乐</router-link>
    <router-link to="/game" tag="li" active-class="head_online">游戏</router-link>
  </div>
</template>
<script>
export default {
	name:'heads'
};
</script>
<style scoped>
.heads{
  width: 100%;
  line-height: 45px;
  position: fixed;
  top: 0;
  z-index: 999;
  text-align: justify;
  background: #ebedf0;
}
.heads li {
  /* width: 55px; */
  list-style: none;
  float: left;
  /* margin-left: 55px; */
  margin-left: 20%;
  text-align: center;
}
.head_online {
  border-bottom: 5px solid red;
  color: red;
}
</style>