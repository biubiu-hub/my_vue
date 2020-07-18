<template>
  <div class="login">
    <van-form class="myLoginForm">
      <van-field
        v-model="username"
        name="用户名"
        label="注册用户名"
        placeholder="请填写用户名"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="注册密码"
        placeholder="请填写密码"
        :rules="[{ required: true, message: '' }]"
      />
      <p class="errorMess">{{errorMess}}</p>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="reg">注册</van-button>
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
    reg() {
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      formData.append("nikename", "前端随机昵称");

      axios({
        url: "/api/reg",
        method: "post",
        data: formData
      }).then(res => {
        if (res.data.err === 0) {
          this.$router.push("/login");
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
  margin: 200px auto;
}
.errorMess {
  color: red;
  font-size: 12px;
  text-indent: 20px;
}
</style>