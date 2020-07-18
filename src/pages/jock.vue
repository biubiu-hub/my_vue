<template>
  <div class="jock pages__padding">
    <ul >
      <router-link tag="li" :to="{name:'detail',query:{text}}" v-for="(text,index) in content" :key="index">
        <p><img :src="text.header" alt=""><a>{{text.name}}</a></p>
        
      </router-link>
    </ul>
    <!-- <ul v-for="(text,index) in content" :key="index">
      <h3 @check="getAll"><span>{{index+1}}、</span>{{text.name}}</h3>
      <li style="color:red">{{text.text}}</li>
      <img src="item.header" alt="">
    </ul> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "jock",
  data() {
    return {
      content: []
    };
  },
  methods: {
    getAll() {
        console.log(this.$route)
        
    }
  },
  mounted() {
    axios({
      url: "https://api.apiopen.top/getJoke",
    }).then(res => {
      console.log("数据", res);
      this.content = res.data.result;
    });
  }
};
</script>
<style scoped>
.jock {
  margin-top: 50px;
  padding: 0 20px;
  text-indent: 20px;
}
.pages__padding{
    padding-bottom:50px
}

.jock img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-top: 10px;
}
.jock a{
  display: inline-block;
  text-indent: 20px;
  text-align: center;
  color:#000
}
</style>