import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)//让vue可以使用vue-router插件
// import Home from "@/views/Home"

let router =  new Router({
  mode:"history",//这种模式访问的时候没有#号
  routes: [
    {path:"/",redirect:"/home"},//redirect:重定向
    {path:"/home",component:()=>import("@/views/Home")},
    {path:"/list",component:()=>import("@/views/List"),children:[
      //二级路由前面不需要加/
      {path:"",redirect:"guonei"},
      {path:"guonei",component:()=>import("@/views/Guonei"),name:"gn"},
      {path:"guoji",component:()=>import("@/views/Guoji"),name:"gj"}
    ]},
    {path:"/mine",component:()=>import("@/views/Mine"),beforeEnter(to,from,next){
      console.log("进入到mine了哦......")
      next()
    }},
    {path:"/detail/:id",component:()=>import("@/views/Detail"),name:"detail",props:true},
  ]
})

//全局的用的多 两个一般用一个
//组件内定路由守卫用得少
//全局的前置路由   
//to:Route:即将要进入的目标 路由对象
//from:Route:当前导航正要离开的路由
// router.beforeEach((to,from,next)=>{
//   if(from.path === "/home"){
//     alert("从首页离开了哦.....")
//   }
//   //一定要调用next方法来resolve这个钩子
//   next()
// })

//全局的后置钩子
// router.afterEach((to,from)=>{
//   if(to.path === "/mine"){
//     alert("进入mine了哦......")
//   }
// })
export default router;
