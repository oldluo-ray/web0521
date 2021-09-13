<template>
    <div>
      <h1>vuex的使用</h1>
      <h2>{{$store.state.sum}}</h2>
      <select name="" id="" v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <button @click="handleAdd">+</button>
      <button @click="handleSub">-</button>
      <button @click="handleOdd">和为奇数时加</button>
      <button @click="handleWait">等一等加</button>
    </div>
</template>

<script>
export default {
  data(){
      return {
        num: 1
      }
  },
  methods:{
    handleAdd(){
      // 调用commit就跳过了actions.直接触发mutations
      this.$store.commit('jia', this.num)
    },
    handleSub(){
      this.$store.commit('jian', this.num) 
    },
    handleOdd(){
      // 要触发actions
      this.$store.dispatch('jiaOdd', this.num)
    },
    handleWait(){
      this.$store.dispatch('jiaWait', this.num) 
    },
  },
  mounted(){
    console.log(this);
  }
}
</script>

<style>

</style>