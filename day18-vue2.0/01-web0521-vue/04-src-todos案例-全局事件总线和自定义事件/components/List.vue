<template>
  <ul class="todo-main">
    <Item v-for="(item) in todoList" :key="item.id" :todo="item" ></Item>
  </ul>
</template>

<script>
import Item from './Item'
export default {
  props: ['todoList'],
  components: {
    Item,
  },
}
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
