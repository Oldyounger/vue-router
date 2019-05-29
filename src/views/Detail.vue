<template>
    <div class="detail">
        我是详情页{{$route.params.id}} {{$route.query.title}} {{id}}
    </div>
</template>

<script>
export default {
    props:["id"],
    created(){
        console.log(this.$route.params.id,this.$route.query.title)
    },
    //重复渲染才会使用这个函数
    // beforeRouteUpdate(to,from,next){
    //     console.log("beforeRouteUpdate")
    //     next()
    // }

}
</script>

<style lang="scss" scoped>

</style>


