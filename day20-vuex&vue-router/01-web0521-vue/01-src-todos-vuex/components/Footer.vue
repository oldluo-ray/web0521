<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="allTotal === doneTotal" @change="allCheckUpdate($event.target.checked)"/>
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{allTotal}} </span>
    <button class="btn btn-danger" @click="clearDoneTodo">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations,mapState} from 'vuex'
export default {
  computed:{
    ...mapGetters(['allTotal','doneTotal']),
    ...mapState(['todoList'])
  },
  methods: {
    ...mapMutations(['allCheckUpdate','clearDoneTodo'])
  },
  updated(){
    localStorage.setItem('todos',JSON.stringify(this.todoList))
  }
}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
