<template>
	<div id="app">
		<Header v-show="$root.header" />
		<keep-alive max="2">
			<router-view></router-view>
		</keep-alive>
		<foot />
	</div>
</template>

<script>
	import Header from "./components/header.vue";
	import Foot from "./components/foot.vue";
	export default {
		name: "App",
		components: {
			Header,
			Foot
		},
		methods: {},
		mounted() {
			// console.log(this.$route)
		},
		watch: {
			$route: {
				//路由监听
				handler(to) {
					let path = to.path;
					if (/home|jock/.test(path)) {
						this.$root.header = true;
					}
					if (/login|reg/.test(path)) {
						this.$root.header = false;
						this.$root.foot=false

					}
					if (/found|mine|detail?text|game|detail/.test(path)) {
						this.$root.header = false;
					}
				},
				immediate: true
			}
		}
	};
</script>

<style scoped>
	#app {
		overflow: hidden;
	}
</style>
