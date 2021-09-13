<template>
  <div>
    <el-button>test</el-button>
  </div>
</template>

<script>
import {Button} from 'element-ui'
console.log(Button.name);
export default {
    components:{
      [Button.name] :Button
    }
}
</script>

<style>

</style>