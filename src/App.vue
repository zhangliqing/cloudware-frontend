<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import auth from './auth'
import router from './router'
export default {
  name: 'app',
  data(){
    return{
      isLogin: false,
      userInfo: { //保存用户信息
        username: null,
        uid: null,
      }
    }
  },
  created() {
      this.checkLogin();//组件创建时检查登录
    },
  watch:{
      "$route":'checkLogin'
  },
    methods: {
      checkLogin(){//检查是否登录
        console.log("检查登录")
        if(!auth.user.authenticated){
          router.push('login');
        }else{
          router.push('home');
        }
      },

    }
}
</script>

<style>

</style>
