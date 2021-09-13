import Vue from 'vue'
import App from './App.vue'

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false


new Vue({
  render: (h) => h(App),
  beforeCreate(){
    // 所有的组件都可以通过$bus获取到项目中唯一的vue实例
    Vue.prototype.$bus = this
  }
}).$mount('#app')
