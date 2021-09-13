<template>
  <div>
    <h1>school组件</h1>
    <div>{{ schoolName }}</div>
    <div>school - {{ num }}</div>
    <div>school - {{ msg }}</div>
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
  mounted() {
    console.log(this)
  },
  // 第一种接收方式: 最常用的
  // props: ['num', 'msg'],
  // 第二种接收方式: 数据校验
  // props: {
  //   num: Number,
  //   msg: String,
  // },
  // 第三种接收方式: 更加详细的校验
  props: {
    num: {
      type: Number,
      required: true, //必填
    },
    msg: {
      type: String,
      default: 'hello world', //默认值
    },
  },
}
</script>

<style scoped>
/* scoped 添加之后,下面的样式,只在当前组件中生效 */
h1 {
  color: green;
}
</style>
