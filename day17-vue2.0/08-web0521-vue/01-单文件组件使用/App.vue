<template>
  <!-- 必须要有一个根标签 -->
  <div>
    <h1>app根组件</h1>
    <p>-------------------</p>
    <div>{{ num }}</div>
    <!-- 使用组件 -->
    <school></school>
    ---------app中使用test---------
    <!-- 注意: 使用组件时,自闭和形式必须是在脚手架中使用 -->
    <Test />
  </div>
</template>

<script>
import school from './components/school.vue'
// import test from './components/test.vue'
// 导出的就是App根组件定义的代码
// Vue.extend({
//   template: '',
//   data() {
//     return {}
//   },
//   methods: {},
//   watch: {},
// })
// 如果要定义组件,也可以直接写一个配置对象.忽略Vue.extend
export default {
  data() {
    return {
      num: 0,
    }
  },
  // 因为school组件要在App组件中使用,所以在App中注册school组件
  // 局部注册
  components: {
    school,
    // test,
  },
}
</script>

<style>
h1 {
  color: red;
}
</style>
