import Vue from 'vue'
import App from './App.vue'

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false

new Vue({
  // 渲染App根组件的代码
  render: (h) => {
    console.log(h)
    return h(App)
  },
}).$mount('#app')
