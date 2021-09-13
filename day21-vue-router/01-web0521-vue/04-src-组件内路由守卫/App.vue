<template>
  <div>
    <button @click="handle1">push</button>
    <button @click="handle2">replace</button>
    <button @click="handle3">go</button>
    <button @click="handle4">back</button>
    <button @click="handle5">forward</button>
    <hr>
    <!-- router-link 默认会往历史记录中添加一条. 如果添加了replace属性,就会替换历史记录 -->
    <router-link to="/home" active-class="active">home</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to='/about' active-class="active">about</router-link>

    <h1>---------------------------------------------------</h1>
    <!-- 最终展示视图的组件, 这个组件写在哪,视图就渲染到哪 -->
    <!-- 当某个组件渲染的时候,会挂载,不渲染的时候会卸载 -->

    <!--keep-alive的作用: router-view 这个组件要渲染的所有的组件,都会被缓存起来(不会重新卸载,挂载) -->
    <!-- <keep-alive >
        <router-view></router-view>
    </keep-alive> -->
    <!-- 只有组件名为sy的组件会缓存 -->
    <!-- <keep-alive include="sy">
        <router-view></router-view>
    </keep-alive>  -->
    <!-- 组件名为sy和about都会缓存,其他的不会缓存 -->
    <keep-alive :include="['sy','about']">
        <router-view></router-view>
    </keep-alive>
    <!-- 注意: include中写的所有的字符串,都不是路由的name属性, 而是组件的name属性 -->
  </div>
</template>

<script>
export default {
  methods:{
    handle1(){
        this.$router.push({
          // name: 'xinwen',
          // 注意: 根router-link一样,如果使用了path,就不要配合params了.而是直接将路由参数,拼接在路径中
          path:'/about/news/22',
          params: {
            id: 100
          }
        })
    },
    handle2(){
        this.$router.replace({
          name: 'xinwen',
          params: {
            id: 100
          }
        })
    },
    handle3(){
        this.$router.go(-1)
    },
    handle4(){
        this.$router.back()
    },
    handle5(){
        this.$router.forward()
    },
  }
    
}
</script>

<style>
  .active {
    color: red;
  }
</style>