<template>
    <div class="mine">
        <!-- <router-link to="/">mine</router-link> -->
        <button @click="clickMine">Mine</button>
    </div>
</template>

<script>
export default {
    methods:{
        clickMine(){
            let flag = confirm("是否返回首页")
            if(flag){
                //编程式导航
                this.$router.push("/")  //$.router里面放的是一些方法
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


