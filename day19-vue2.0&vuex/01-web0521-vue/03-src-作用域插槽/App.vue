<template>
  <div>
     <Category>
       <template scope="atguigu">
          <h1>{{atguigu.msg}}</h1>
          <ul>
            <li v-for="item in atguigu.list" :key="item">{{item}}</li>
          </ul>
       </template>
     </Category>
     
  </div>
</template>

<script >
    import Category from './components/Category'

    export default {
      components:{
        Category
      }
    }
</script>

<style >

</style>