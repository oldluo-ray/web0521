<template>
  <div>
    <h1>school组件</h1>
    <div>{{num}}</div>
    <button @click="handle">school-按钮</button>
    <hr>
    <div>{{schoolName}}</div>
  </div>
</template>

<script>
// import test from './test.vue'
import {hunhe2} from '../mixin'
export default {
  data() {
    return {
      schoolName: 'atguigu-scope',
    }
  },
  mounted() {
    console.log('自己的钩子函数');
    console.log(this)
  },
  mixins:[hunhe2]
  
}
</script>

<style scoped>
/* scoped 添加之后,下面的样式,只在当前组件中生效 */
h1 {
  color: green;
}
</style>
