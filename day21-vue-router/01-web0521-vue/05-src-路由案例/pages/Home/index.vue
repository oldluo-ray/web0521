<template>
  <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <router-link to='/home/news'>News</router-link>
            </li>
            <li>
              <router-link to='/home/message'>Message</router-link>
            </li>
          </ul>
          <div>
            <div>
             <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import News from '../News/index'
import Message from '../Message/index'
export default {
    components:{
        News,
        Message
    }
}
</script>

<style>

</style>