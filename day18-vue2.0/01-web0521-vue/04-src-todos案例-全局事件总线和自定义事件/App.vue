<template>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo="addTodo"></Header>
        <List v-show="todoList.length" :todoList="todoList" ></List>
        <Footer v-show="todoList.length" :allTotal="allTotal" :doneTotal="doneTotal" @updateAll="updateAll" @deleteAllDone="deleteAllDone"></Footer>
        <h1 v-show="!todoList.length">恭喜你没有任务</h1>
      </div>
      
    </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {

  data(){
    return {
       todoList: JSON.parse(localStorage.getItem('todos')) || []
    }
  },

  methods:{
    addTodo(todoName){
      // console.log(todoName);

      let id = this.todoList.length ? this.todoList[this.todoList.length - 1].id + 1 : 1

      const todo = {
        todoName,
        isDone:false,
        id
      }

      this.todoList.push(todo)
    },
    updateTodo(id){
      // console.log(id);
      this.todoList.forEach(item=>{
        if(item.id === id){
          item.isDone = !item.isDone
        }
      })
    },
    deleteTodo(id){
      // console.log(id);
      this.todoList = this.todoList.filter((item)=>{
        return item.id !== id
      })
    },
    updateAll(result){
      // 方式一: 
      // 判断所有的数据,是否都选中了,就变成都不选中,
      // 如果所有数据中,有一个未选中,那么就让数据变成都选中
      // console.log('全选被点击了');
      // const result = this.todoList.every(item=>item.isDone)

      // this.todoList.forEach(item=>{
      //   item.isDone = !result
      // })

      // 方式二: 
      // 接收全选的最新的值,然后将所有的数据,改成全选的值
      // console.log(result);
      this.todoList.forEach(item=>{
        item.isDone = result
      })
    },
    deleteAllDone(){
      this.todoList = this.todoList.filter(item=>!item.isDone)
    }
  },

  computed:{
     allTotal(){
       return this.todoList.length
     },
     doneTotal(){
       return this.todoList.filter(item=>item.isDone).length
     }
  },

  components:{
    Header,
    List,
    Footer
  },
  mounted(){
    // 给vue实例,绑定自定义事件,为了获取item组件中的数据
    this.$bus.$on('updateTodo', this.updateTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
  },
  beforeDestroy(){
    // 注意: 一般在组件即将卸载的时候,解绑自定义事件
    this.$bus.$off('updateTodo')
    this.$bus.$off('deleteTodo')
  },
  updated(){
     localStorage.setItem('todos',JSON.stringify(this.todoList))
  }

}
</script>

<style>
  /*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>