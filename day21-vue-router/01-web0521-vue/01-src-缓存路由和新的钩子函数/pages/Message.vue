<template>
  <div>
      <h2>
          message页面
          <div>
            <!-- {{$route.params.page}}
            {{$route.params.pageSize}} -->
            <!-- {{num1}}
            {{num2}} -->
            <!-- {{page}}
            {{pageSize}} -->
            {{page}}
            {{name}}
            {{str}}
          </div>
      </h2>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route);
    // console.log(this);
  },
  // props: ['num1','num2']
  // props后面中括号的字符串,做了两件事:
  // 1.根据字符串,给当前组件添加属性
  // 2. 根据字符串,去this.$route.params中查找指定的数据
  // props如果要接收路由参数,参数名一定要和定义路由参数的名字保持一致
  // props: ['page','pageSize']
  props:['page','name','str']
}
</script>

<style>

</style>