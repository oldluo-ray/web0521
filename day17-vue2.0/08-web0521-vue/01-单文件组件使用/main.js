import Vue from 'vue'
import App from './App.vue'
//可以忽略.vue后缀名
import test from './components/test'

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false

// 公共组件,直接全局注册
// Vue.component('组件名', 组件)
// 注意: 注册组件时用了什么名字,使用时就必须要使用什么名字. 并且区分大小写
Vue.component('Test', test)

new Vue({
  // 渲染App根组件的代码
  render: (h) => {
    console.log(h)
    return h(App)
  },
}).$mount('#app')
