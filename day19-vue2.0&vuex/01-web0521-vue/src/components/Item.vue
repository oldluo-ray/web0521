<template>
  <li>
    <label>
      <input
        type="checkbox"
        v-bind:checked="todo.isDone"
        @change="updateTodo(todo.id)"
      />
      <span :class="todo.isDone ? 'active' : ''">{{ todo.todoName }}</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['todo'],

  methods: {
    // updateHandle() {
    //   this.$store.commit('updateTodo', this.todo.id)
    // },
    ...mapMutations(['updateTodo']),
  },
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
  /* display:flex;
  align-items: center; */
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
