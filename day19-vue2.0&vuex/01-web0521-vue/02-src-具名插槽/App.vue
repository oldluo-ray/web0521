<template>
  <div>
     <Category>
        <ul slot="ul">
          <li>理想</li>
          <li>蔚来</li>
          <li>小鹏</li>
        </ul>

        <!-- <template slot="ol"> -->
          <!-- v-slot是新的语法,只能用在template上面 -->
        <template v-slot:ol> 
          <ol >
            <li>特斯拉</li>
            <li>BYD</li>
            <li>恒大汽车</li>
          </ol>
          <h5 >随便写的一个标签</h5>
        </template>
     </Category>
     <!-- <Category>
       <img src="./assets/pro.jpg" alt="">
     </Category> -->
     
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