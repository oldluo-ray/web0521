<template>
  <div>
      <h1>
          HOME页面
          <input type="text">
      </h1>
  </div>
</template>

<script>
export default {
    name: 'sy',
    beforeDestroy(){
        console.log('home组件即将卸载');
    },
    mounted(){
        console.log('home组件挂载成功');
    },
    // 当组件缓存之后,不会重复的挂载和卸载,那么原本写在挂载和卸载的代码就不能执行了,这时就可以使用activated和deactivated替换挂载和卸载
    activated(){
        console.log('home组件又展示了');
    },
    deactivated(){
        console.log('home组件又不展示了');
    }
    
}
</script>

<style>

</style>