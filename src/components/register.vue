<template>
  <div class="container">
    <div style="margin-top:20px; text-align: center" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" >
      <h1>Cloudware Lab</h1>
      <h3>开启云时代软件新体验</h3>
    </div>
    <div id="loginbox" style="margin-top:20px;" class="mainbox col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <div class="panel-title" style="display: inline-block">用户注册</div>

        </div>

        <div style="padding-top:30px" class="panel-body">
          <!--<div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>-->

          <form id="registerForm" class="form-horizontal" role="form">

            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon">用户名：</span>
              <input type="text" class="form-control" placeholder="" >
            </div>

            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon">密码：</span>
              <input type="password" class="form-control" placeholder="" >
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon">确认密码：</span>
              <input type="password" class="form-control" placeholder="" >
            </div>



            <div style="padding-left: 40px;padding-right: 20px" class="form-group">
              <a class="btn btn-success" >注册</a>
              <div style="float:right; margin-top: 10px"><a @click="toLogin" style="text-decoration: none">已有账号?</a></div>
            </div>


          </form>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../router'
  export default{
    name:'register',
    methods:{
      toLogin:function () {
        router.push('login')
      }
    },
  }
</script>
<style>

</style>
