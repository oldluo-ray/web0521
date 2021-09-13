<template>
  <div>
    <h1>school组件</h1>
    <div>{{x}}</div>
    <div>{{y}}</div>
    <input type="text" v-fbind="x">
  </div>
</template>

<script>
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
  
}
</script>

<style scoped>
/* scoped 添加之后,下面的样式,只在当前组件中生效 */
h1 {
  color: green;
}
</style>
