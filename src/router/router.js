import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


import Home from "../pages/home.vue"
import Jock from "../pages/jock"
import Nothing from "../pages/nothing"
import Mine from "../pages/mine"
import Game from "../pages/game"
import Detail from "../pages/detail"
import Found from "../pages/found"
import Login from "../pages/login"
import Reg from "../pages/reg"
const routes=[
    {path:'/home',name:'home',component:Home},
    {path:'/jock',name:'jock',component:Jock},
    {path:'/mine',name:'mine',component:Mine},
    {path:'/game',name:'game',component:Game},
    {path:'/detail',name:'detail',component:Detail},
    {path:'/found',name:'found',component:Found},
    {path:'/login',name:'login',component:Login},
    {path:'/reg',name:'reg',component:Reg},
    {path:'/',redirect:Home},
    {path:'*',component:Nothing},
    // { path: '/detail/:_id', component: Detail, name: "detail" },

]
const router =new VueRouter({
    mode:'history',
    routes
})



export default router