<template>
  <div class="login">
    <van-form class="myLoginForm">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请填写用户名"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请填写密码"
        :rules="[{ required: true, message: '' }]"
      />
      <p class="errorMess">{{errorMess}}</p>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="login">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMess: ""
    };
  },
  methods: {
    login() {
      axios({
        url: "/api/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        if (res.data.err === 0) {
          //1种token
          window.localStorage.setItem("user", JSON.stringify(res.data));
          //2 跳转到之前的页面
          if (this.$route.query.address) {
            this.$router.replace(this.$route.query.address);
          } else {
            this.$router.replace("/mine");
          }
        } else {
          this.errorMess = res.data.msg;
        }
      });
    }
  }
};
</script>
<style scoped>
.myLoginForm {
  margin-top: 100px;
  width: 70%;
  height: 100%;
  margin: 200px auto;
}
#app{
	background: lightskyblue;
}

.errorMess {
  color: red;
  font-size: 12px;
  text-indent: 20px;
}
</style>