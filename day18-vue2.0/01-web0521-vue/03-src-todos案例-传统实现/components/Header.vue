<template>

  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model.trim="todoName" @keyup.enter="sendTodoName" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      todoName: ''
    }
  },
  methods:{
    sendTodoName(){
      if(!this.todoName)return
      // 将用户名传给app组件,让app组件修改数据
      this.addTodo(this.todoName)
      // 清空文本框
      this.todoName = ''
    },
  },
  props:['addTodo']
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
