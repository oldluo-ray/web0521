<template>
  <div>
      <h1>
          HOME页面
      </h1>
  </div>
</template>

<script>
export default {
    beforeDestroy(){
        console.log('组件即将卸载');
    },
    mounted(){
        console.log('组件挂载成功');
    }
}
</script>

<style>

</style>