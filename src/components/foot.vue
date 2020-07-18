<template>
  <div class="foot">
    <van-tabbar v-model="active" :route="true">
     <!-- <van-tabbar-item icon="home-o" to="/home" >首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/found" >相关</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine" >我的</van-tabbar-item>
      -->
	  <van-tabbar-item
        v-for="(item,index) in list"
        :key="index"
        :icon="item.icon"
        :to="{name:item.name}"
      >
        <span>{{item.det}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      list: [
        { id: 1, det: "首页", name: "home", icon: "home-o" },
        { id: 2, det: "相关", name: "found", icon: "search" },
        { id: 3, det: "我的", name: "mine", icon: "friends-o" }
      ],
      active: 0
    };
  },
  methods:{
   
  }
};
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  height: 50px;
}
</style>
