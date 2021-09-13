<template>
  <!-- 必须要有一个根标签 -->
  <div>
    <h1>app根组件</h1>
    <p>-------------------</p>
    <div>app - {{ num }}</div>
    <!-- 使用组件 -->
    <!-- 传递props数据,写:是为了将num值当做data中的数据解析 -->
    <school :num="num" msg="hello vue"></school>
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
import school from './components/school.vue'

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
      this.num = ++this.num
    },
  },
}
</script>

<style>
h1 {
  color: red;
}
</style>
