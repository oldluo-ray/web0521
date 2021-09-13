import Vue from 'vue'
import App from './App.vue'

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false


new Vue({
  render: (h) => h(App),
}).$mount('#app')
