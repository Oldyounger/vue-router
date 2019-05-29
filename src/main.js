import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,//为了可以让组件使用this.$router,this.$route的一些api属性或方法
  store,
  render: h => h(App)
}).$mount('#app')
