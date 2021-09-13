<template>
  <div>
      <h1>
        About页面
      </h1>
      <router-link :to="{
         // name:'xinwen',
          path: '/about/news',
          query: {
              name:'zs',
              age: 18
          }
       }">news</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/about/message?name=ls&age=20">message</router-link>
      
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>