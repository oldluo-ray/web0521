<template>
  <div>
      <h2>
          news页面
          <div>
              {{$route.params.id}}
          </div>
      </h2>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route);
    }
}   
</script>

<style>

</style>