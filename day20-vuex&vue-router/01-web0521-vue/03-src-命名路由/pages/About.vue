<template>
  <div>
      <h1>
        About页面
      </h1>
      <router-link :to="{name:'xinwen'}">news</router-link>&nbsp;&nbsp;&nbsp;
      <router-link :to="{name:'xinxi'}">message</router-link>
      
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>