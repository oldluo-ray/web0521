<template>
  <li @mouseenter="enterHandle" @mouseleave="leaveHandle">
    <label >
      <input type="checkbox" v-bind:checked="todo.isDone" @change="update"/>
      <span :class="todo.isDone ? 'active': ''">{{todo.todoName}}</span>
    </label>
  </li>
</template>

<script>
export default {
    data(){
      return {
          styleObj:{
            display:'none'
          }
      }
    },
    props:['todo',],
    methods:{
      enterHandle(){
         this.styleObj.display = 'block'
      },
      leaveHandle(){
        this.styleObj.display = 'none'
      },
      update(){
        // 通知app,修改任务
        // const id = this.todo.id 
        // this.updateTodo(id)
        this.$bus.$emit('updateTodo',this.todo.id)
        

      },
      deleteFn(){
        // this.deleteTodo(this.todo.id)
        this.$bus.$emit('deleteTodo', this.todo.id)
      }
    }
}
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  /* display:flex; */
  /* align-items: center; */
  float: left;
  cursor: pointer;
}

li label span.active {
  color: #ccc;
  text-decoration: line-through;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
