<template>
	<div class="detail">
		<!-- {{this.$route.query.text}} -->
		<!-- <p>{{list.text}}</p> -->
		<van-nav-bar title="详情" left-text="返回" left-arrow @click-left="onClickLeft" class="goBack" />
		<img :src="list.top_comments_header" alt="">
		<p>{{list.text}} <span>时间：{{list.passtime}}</span></p>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list: []
			};
		},
		mounted() {
			if (window.localStorage.getItem('user')) {
				console.log(this.list);
				this.list = this.$route.query.text;

				//  // console.log("aaa")
			} else {
				alert('未登录请先登录')
				this.$router.push('/login')
			}

		},
		activated() {
			this.list = this.$route.query.text;
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
		}
	};
</script>
<style scoped>
	.detail {
		margin-top: 50px;
		font-size: 14px;
	}

	p span {
		float: right;
		color: gray;
	}

	img {
		float: left;
	}
	.goBack{
		position: fixed;
		top: 0;
		width: 100%;
	}
</style>
