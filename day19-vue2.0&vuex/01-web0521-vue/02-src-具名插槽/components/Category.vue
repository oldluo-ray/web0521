<template>
   <div>
       <h1>category组件</h1>
       <hr>
            <slot name="ul"></slot>   
       <hr>
        <!-- slot用于接收当前组件子节点的内容 -->
       <!-- <slot>
           <h3>这是slot的默认内容</h3>
       </slot> -->
            <slot name="ol"></slot>
       <hr>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>