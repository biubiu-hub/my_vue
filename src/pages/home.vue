<template>
	<div class="pages__padding">
		<banner />
		<ul>
			<li v-for="(item,index) in homeList" :key="index">
				<img :src="item.image" />
				<a :href="item.path">{{item.title}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from "axios";
	import Banner from "../components/banner";
	
	import {mapState} from "vuex"
	export default {
		name: "home",
		data(){
			return {
				homeList:[]
			}
		},
		components: {
			Banner
		},
		mounted() {
			axios({
				url: "https://api.apiopen.top/getWangYiNews"
			}).then(res => {
				console.log(res);
				this.homeList = res.data.result;
			});
		},
	};
</script>
<style scoped>
	.pages__padding {
		padding-bottom: 50px;
	}

	ul li {
		padding: 10px;
		height: 95px;
	}

	ul li img {
		float: left;
	}

	ul li a {
		display: block;
		float: left;
		/* width:215px; */
		width: 60%;
		margin-top: 22px;
		text-indent: 25px;
		color: #000;
	}
</style>>
