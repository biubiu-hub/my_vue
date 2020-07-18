<template>
  <div class="test">
    <!-- <button @click="get">获取数据</button> -->
    <!-- <p>{{content}}</p> -->
    <router-link v-for="(text,index) in content" :key="index">
      <ul>
        <li>
          {{text.name}}
          <a style="color:red">{{text.text}}</a>
        </li>
      </ul>
    </router-link>
    <!-- <div v-for="(text,index) in content" :key="index">
      <ul>
        <li>
          {{text.name}}
          <a style="color:red">{{text.text}}</a>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
import "vue-router"
export default {
  name:'test',
  data() {
    return {
      content: []
    };
  },
  methods: {
    get() {}
  },
  mounted() {
    axios({
      url:
        //   "http://3g.163.com/touch/jsonp/sy/recommend/0-9.html?miss=30&refresh=B02",
        "https://api.apiopen.top/getJoke"
      // headers: {
      //   "X-Content-From": "netease",
      //   "x-envoy-upstream-service-time": "6",
      //   "x-varnish": "1772172574",
      //   "x-varnish-cache": "MISS",
      //   "X-Ws-Request-Id": "5f0c511a_PSsdzbwtnm37_1594-59224",
      //   X_cache: "from chuanmei-ospf-lt0.hz.163.org"
      // }
    }).then(res => {
      console.log("数据", res);
      this.content = res.data.result;
    });
  }
};
</script>
<style scoped>
.test {
  /* margin-top: 30px; */
}
</style>