import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './routers'
// 不展示生产环境相关的提示信息
Vue.config.productionTip = false
// 使用vueRouter插件,在vue组件中可以使用vueRouter中提供的组件和其他功能
Vue.use(vueRouter)
new Vue({
  render: (h) => h(App),
  // 配置路由表
  router
}).$mount('#app')
