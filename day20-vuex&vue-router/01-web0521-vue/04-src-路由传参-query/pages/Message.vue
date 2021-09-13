<template>
  <div>
      <h2>
          message页面
          <div>
            {{$route.query.name}}
            {{$route.query.age}}
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