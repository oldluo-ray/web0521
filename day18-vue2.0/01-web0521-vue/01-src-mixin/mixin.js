export const hunhe = {
    data(){
        return {
            num: 0
        }
    },
    // 如果混入的methods和组件的methods冲突,则以组件的methods优先
    methods: {
        handle() {
          console.log('混入的handle');
          this.num = ++this.num
        },
      },
} 

export const hunhe2 = {
  // 如果混入的数据发生冲突,那么组件自己的数据优先
    data() {
        return {
          schoolName: 'atguigu',
        }
      },
      // 当混入的钩子和组件自己的钩子冲突,内部会通过一个数组,将多个钩子管理起来,触发的时候,先触发混入的,后触发自己的
    mounted() {
      console.log('混入的钩子函数');
        console.log(this)
    },
}