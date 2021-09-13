<template>
  <div>
      <h1>
        About页面
      </h1>
      <router-link :to="{
          name:'xinwen',
         // 注意: 如果要写path.那么就不能配合params去传递路由参数.应该将路由参数直接拼接在路径的后面
         // path: '/about/news/1',
          params:{
            // 注意: 传递时,属性名要和定义时参数名操持一致
            id: 1
          }
       }">news</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/about/message/1?name=zs">message</router-link>
      
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'about',
    beforeDestroy(){
        console.log('about组件即将卸载');
    },
    mounted(){
        console.log('about组件挂载成功');
    }
}
</script>

<style>

</style>