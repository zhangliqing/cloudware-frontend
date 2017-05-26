<template>
  <div class="container">
    <div style="margin-top:20px; text-align: center" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" >
      <h1>Cloudware Lab</h1>
    </div>
    <div id="loginbox" style="margin-top:20px;" class="mainbox col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <div class="panel-title" style="display: inline-block">用户注册</div>

        </div>

        <div style="padding-top:30px" class="panel-body">
          <!--<div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>-->

          <form id="registerForm" class="form-horizontal" role="form" >

            <div style="margin: 20px auto" class="input-group">
              <!--<span class="input-group-addon">用户名：</span>-->
              <input type="text" class="form-control" placeholder="姓名" v-model="username">
            </div>

            <div style="margin: 20px auto" class="input-group">
              <input type="password" class="form-control" placeholder="密码，不少于6位" v-model="password">
            </div>
            <div style="margin: 20px auto" class="input-group">
              <input type="password" class="form-control" placeholder="确认密码" v-model="rePassword">
            </div>

            <div style="text-align: center;margin-top: 5px" class="form-group">
              <a class="btn btn-primary" style="width: 50%;display: block; margin: 0 auto" @click="submit">注册</a><br>
              <a @click="toLogin" style="display: block">已有账号?</a>
            </div>


          </form>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../router'
  import auth from '../auth'
  export default{
    name:'register',
    data(){
      return {
        username: '',
        password: '',
        rePassword:'',
        error:''
      }
    },
    methods:{
      toLogin:function () {
        router.push('login')
      },
      submit:function () {
        var creds={
          username:this.username,
          password:this.password
        }
        auth.signup(this,creds,'login')
      }
    },
  }
</script>
<style>

</style>
