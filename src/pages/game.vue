<template>
	<div class="game">
		<van-nav-bar title="游戏" left-text="返回" left-arrow @click-left="onClickLeft" class="goBack" />
		<ul class="gameInfo">
			<li v-for="item of gameList">
				<a href="javascript:;">{{item.fuliline}}</a>
				<img :src="item.img120x120" alt="">
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: 'game',
		data() {
			return {
				gameList: []
			}
		},
		mounted() {
			axios({
				url: '/data/game_data.json'
			}).then(res => {
				console.log(res)
				this.gameList = res.data.data
			})
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
		}
	}
</script>
<style scoped>
	.game {
		padding: 50px 0;
	}

	.gameInfo li {
		width: 48%;
		height: 63px;
		float: left;
		margin-left: 4px;
		margin-top: 2px;
		overflow: hidden;
		border: 1px solid red;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.gameInfo li a {
		color: #808080;
		font-size: 0.01rem;
	}

	.goBack {
		width: 100%;
		position: fixed;
		top: 0;
	}
</style>
