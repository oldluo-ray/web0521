export default {
    install(Vue,...args){
      console.log('install执行了',Vue, args);

        //全局过滤器
      Vue.filter('mySlice', function(value) {
        return value.slice(0, 4)
      })
  
      //定义全局指令
      Vue.directive('fbind', {
        //指令与元素成功绑定时（一上来）
        bind(element, binding) {
          element.value = binding.value
        },
        //指令所在元素被插入页面时
        inserted(element) {
          element.focus()
        },
        //指令所在的模板被重新解析时
        update(element, binding) {
          element.value = binding.value
        },
      })
  
      //定义混入
      Vue.mixin({
        data() {
          return {
            x: 100,
            y: 200,
          }
        },
      })

      // 定义全局的方法
      Vue.prototype.hello = () =>{
          console.log('hello vue');
      }

    }
}