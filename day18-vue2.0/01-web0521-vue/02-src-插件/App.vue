<template>
  <!-- 必须要有一个根标签 -->
  <div>
      <div>{{x}}</div>
      <div>{{y}}</div>
      <button @click="handle">按钮</button>
      <hr>
      <school></school>
      
  </div>
</template>

<script>
import school from './components/school.vue'

// 如果要定义组件,也可以直接写一个配置对象.忽略Vue.extend
export default {
  
  // 因为school组件要在App组件中使用,所以在App中注册school组件
  // 局部注册
  components: {
    school,
   
  },
  methods:{
    handle(){
      this.hello()
    }
  }
}
</script>

<style>
h1 {
  color: red;
}
</style>
