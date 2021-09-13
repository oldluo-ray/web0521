<template>
  <!-- 必须要有一个根标签 -->
  <div>
    <h1 ref="title">app根组件</h1>
    <p>-------------------</p>
    <div>{{ num }}</div>
    <!-- 使用组件 -->
    <school ref="sch"></school>
    <button @click="handle">按钮</button>
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

  methods: {
    handle() {
      // this是当前组件实例
      // 只可以获取到当前组件中绑定的ref内容
      console.log(this.$refs.sch) // school组件实例
      console.log(this.$refs.title) // h1真实dom对象
    },
  },
}
</script>

<style>
h1 {
  color: red;
}
</style>
