<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-bind:checked="doneTotal === allTotal" @change="updateAll"/>
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{allTotal}} </span>
    <button class="btn btn-danger" @click="deleteAllDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  // props: ['doneTotal','allTotal','updateAll',"deleteAllDone"]
  props: ['doneTotal','allTotal'],
  methods:{
    updateAll(e){
      this.$emit('updateAll', e.target.checked)
    },
    deleteAllDone(){
      this.$emit('deleteAllDone')
    }
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
