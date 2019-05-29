<template>
  <div id="app">
   hello app.vue
   <div>
     <!--创建路由切换的方法-->
     <!-- <router-link to="/home">首页</router-link>
     <router-link to="/list">列表</router-link>
     <router-link to="/mine">我的</router-link> -->
     <router-link
      v-for="nav in navs"
      :key="nav.id"
      :to="nav.path"
     >{{nav.title}}</router-link>
   </div>
   <router-view></router-view><!--显示路由组件的位置-->
  </div>
</template>

<style lang="scss">
  .router-link-active{
    color:plum;
  }
  // .router-link-exact-active{
  //   color:purple;
  // }
</style>

<script>
export default {
  data(){
    return{
      navs:[
        {id:1,title:"首页",path:"/home"},
        {id:2,title:"列表",path:"/list"},
        {id:3,title:"我的",path:"/mine"},
      ]
    }
  },
  created(){

  }
}
</script>
