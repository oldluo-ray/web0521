<template>
  <div>
      <h1>count组件</h1>
      <!-- <div>{{$store.state.xxx.count}}</div>
      <div>{{$store.getters['xxx/bigCount']}}</div> -->
      <div>{{count}}</div>
      <div>{{bigCount}}</div>
      <button @click="jia(1)">+</button>
      <button @click="jiaWait(1)">延迟+</button>
  </div>
</template>

<script>
import { mapGetters,mapState, mapActions, mapMutations } from 'vuex'
export default {
  computed:{
    ...mapState('xxx',['count']),
    ...mapGetters('xxx',['bigCount'])
    
  },
  methods:{
    // handleAdd(){
    //     this.$store.commit('jia', 1)
    // },
    // handleWait(){
    //     this.$store.dispatch('jiaWait', 1)
    // }
    ...mapActions('xxx',['jiaWait']),
    ...mapMutations('xxx',['jia'])
   

  }
}
</script>

<style>

</style>