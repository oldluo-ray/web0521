<template>
   <div>
       <h1>category组件</h1>
       <slot :list="list" msg="他们都不是好人"></slot>
   </div>
</template>

<script>
export default {
    data(){
        return {
            list: [
                '静静',
                '贱贱',
                '越越'
            ]
        }
    }
}
</script>

<style>

</style>