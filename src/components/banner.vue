<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
      <!-- <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item> -->
      <van-swipe-item v-for="(item,index) of banner" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      banner: [
        require("../assets/img/heizi1.jpg"),
        require("../assets/img/heizi2.jpg"),
        require("../assets/img/heizi3.jpg"),
        require("../assets/img/heizi4.jpg")
      ]
    };
  },
  methods:{

  },
  mounted(){

  }
 
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  margin-top: 2.3rem;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.banner img{
  width: 100%;
  height: 200px;
}
</style>