<template>
	<div class="mine">
		<div class="toLogin" v-if="isLogin">
			<router-link to="/login">
				<van-button color="linear-gradient(to right, skyblue, yellowgreen)">去登陆</van-button>
			</router-link>
			<router-link to="/reg">
				<van-button color="linear-gradient(to right, yellowgreen,skyblue)">去注册</van-button>
			</router-link>
			<!-- <router-link to="/login">去登陆</router-link>
			<router-link to="/reg">去注册</router-link> -->
		</div>
		<div class="ofLogin" v-else>
			<a @click="clearLogin">注销</a>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		name: "mine",
		data() {
			return {
				isLogin: false
			};
		},
		mounted() {
			if (window.localStorage.getItem('user')) {
				this.isLogin = false
			} else {
				this.isLogin = true
			}

		},
		methods: {
			clearLogin() {
				window.localStorage.removeItem('user');
				this.isLogin = true;
				this.$router.push('/login')

			}
		}
	}
</script>
