import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 引入路由
import router from "./router/router.js";

// 全部添加
import Vant from 'vant' 
import 'vant/lib/index.css'; 
Vue.use(Vant)



let vm = new Vue({
  data:{
    header:true
  },
  render: h => h(App),
  router,
}).$mount('#app')
export default vm
