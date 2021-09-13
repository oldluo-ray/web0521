<template>
    <div>
      <h1>vuex的使用</h1>
      <!-- <h2>{{$store.state.sum}}</h2>
      <h2>{{$store.getters.bigSum}}</h2> -->
      <!-- <h2>{{sum}}</h2>
      <h2>{{bigSum}}</h2> -->
      <h2>{{sumTest}}</h2>
      <h2>{{bigSumTest}}</h2>
      <select name="" id="" v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <button @click="handleAdd(num)">+</button>
      <button @click="handleSub(num)">-</button>
      <button @click="handleOdd(num)">和为奇数时加</button>
      <button @click="handleWait(num)">等一等加</button>
    </div>
</template>

<script>
import {mapState, mapGetters,mapActions, mapMutations} from 'vuex'
export default {
  data(){
      return {
        num: 1
      }
  },
  computed:{
    // 传入数组,计算属性的属性名和vuex中数据的属性名一致
    // ...mapState(['sum']),
    // 传入对象,计算耐属性的属性名就是对象中的键
    ...mapState({sumTest: 'sum'}),
    // ...mapGetters(['bigSum'])
    ...mapGetters({bigSumTest: 'bigSum'})
  },
  methods:{
    // handleAdd(){
    //   // 调用commit就跳过了actions.直接触发mutations
    //   this.$store.commit('jia', this.num)
    // },
    // handleSub(){
    //   this.$store.commit('jian', this.num) 
    // },
    // handleOdd(){
    //   // 要触发actions
    //   this.$store.dispatch('jiaOdd', this.num)
    // },
    // handleWait(){
    //   this.$store.dispatch('jiaWait', this.num) 
    // },
    // ...mapActions(['jiaOdd','jiaWait']),
    ...mapActions({handleOdd: 'jiaOdd', handleWait: 'jiaWait'}),
    // ...mapMutations(['jia','jian']),
    ...mapMutations({handleAdd:'jia', handleSub: 'jian'}),

  },
  mounted(){
    console.log(this);
  }
}
</script>

<style>

</style>