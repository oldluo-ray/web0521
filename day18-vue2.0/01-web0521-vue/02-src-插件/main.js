import Vue from 'vue'
import App from './App.vue'
import testPlugin from './plugin'

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false
//使用插件
Vue.use(testPlugin,1,2,3,4,5)

new Vue({
  // 渲染App根组件的代码
  render: (h) => {
    return h(App)
  } 
}).$mount('#app')
