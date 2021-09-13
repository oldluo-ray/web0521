<template>
  <div>
    <!-- router-link 默认会往历史记录中添加一条. 如果添加了replace属性,就会替换历史记录 -->
    <router-link replace to="/home" active-class="active">home</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to='/about' active-class="active">about</router-link>

    <h1>---------------------------------------------------</h1>
    <!-- 最终展示视图的组件, 这个组件写在哪,视图就渲染到哪 -->
    <!-- 当某个组件渲染的时候,会挂载,不渲染的时候会卸载 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .active {
    color: red;
  }
</style>