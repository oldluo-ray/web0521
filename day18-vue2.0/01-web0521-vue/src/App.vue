<template>
  <div>
     <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear的作用: 第一次展示的时候启动过渡 -->
    <!-- transition 只能包裹一个元素 -->
    <!-- <transition name="hello" appear>
      <h1 v-if="isShow">你好啊</h1>
    </transition> -->
     <!-- 如果要包裹多个元素,应该使用transition-group. 并且每个元素都应该加一个key -->
     <transition-group name="hello" appear>
      <h1 v-if="isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">atguigu</h1>
    </transition-group>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
}
</script>


<style>
h1 {
  background-color: orange;
}

.hello-enter-active {
  animation: atguigu 1s linear;
}
.hello-leave-active {
  animation: atguigu 1s linear reverse;
}


@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
