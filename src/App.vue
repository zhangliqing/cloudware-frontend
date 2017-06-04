<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>

  import router from './router'
  import store from './store'
  export default {
    name: 'app',
    data(){
      return {
        isLogin: false,
        userInfo: { //保存用户信息
          username: null,
          uid: null,
        }
      }
    },
    created() {
      if (router.path !== '/login' || router.path !== '/register') {
        store.user.getInfo().then((user) => console.log(user), router.push('/login'))
      }
    },
  }
</script>

<style>
  html, body, #app {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
</style>
