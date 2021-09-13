<template>
  <div>
    <h1>school组件</h1>
    <div>{{ schoolName }}</div>
    ----------school里面用test组件-----------------
    <Test></Test>
  </div>
</template>

<script>
// import test from './test.vue'
export default {
  data() {
    return {
      schoolName: 'atguigu',
    }
  },
  // components: {
  //   test,
  // },
}
</script>

<style scoped>
/* scoped 添加之后,下面的样式,只在当前组件中生效 */
h1 {
  color: green;
}
</style>
