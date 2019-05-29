<template>
    <div class="home">
        home
        <ul>
            <router-link to="/detail/1?title=起风了" tag="li">我曾将青春翻涌成她</router-link>
            <router-link :to="{path:'/detail/2',query:{title:'打烊'}}" tag="li">你的酒馆对我打了烊</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    // beforeRouteEnter(to,from,next){
    //     console.log("beforeRouteEnter......",this)
    //     next()
    // },
    // beforeRouteLeave(to,from,next){
    //     console.log("beforeRouteLeave......",this)
    //     next()
    // }
}
</script>

<style lang="scss" scoped>

</style>


