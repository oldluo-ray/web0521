import Vue from 'vue'
import App from './App.vue'
import elementUI from 'element-ui'
// 按需加载之后,css就不需要手动引入了
// import 'element-ui/lib/theme-chalk/index.css';
// 不展示生产环境相关的提示信息
Vue.config.productionTip = false
Vue.use(elementUI)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
