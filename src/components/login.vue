<template>
  <div class="container">
    <div style="margin-top:20px; text-align: center" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" >
      <h1>Cloudware Lab</h1>
    </div>
    <div id="loginbox" style="margin-top:20px;" class="mainbox col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <div class="panel-title" style="display: inline-block">登录</div>
          <div style="float:right; margin-top: 10px"><a @click="toRegister" style="color: white;text-decoration: none">没有账号?</a></div>
        </div>

        <div style="padding-top:30px" class="panel-body">

          <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>

          <form id="loginform" class="form-horizontal" role="form">

            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input type="text" class="form-control" placeholder="username or email" v-model="credentials.username">
            </div>

            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="password" class="form-control" placeholder="password" v-model="credentials.password">
            </div>


            <!--<div class="input-group" style="margin-left: 15px">-->
              <!--<div class="checkbox">-->
                <!--<label>-->
                  <!--<input id="login-remember" type="checkbox" name="remember" value="1"> Remember me-->
                <!--</label>-->
              <!--</div>-->
            <!--</div>-->


            <div style="text-align: center;margin-top: 5px" class="form-group">
                  <a @click="submit()" class="btn btn-primary " style="width: 50%;display: block; margin: 0 auto">登录</a><br>
                  <a href="#" style="display: block">忘记密码?</a>
            </div>


          </form>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '../auth'
  import router from '../router'
  export default {
  name:"login",
    data()
  {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  }
  ,

  methods: {
    submit()
    {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login(this, credentials, 'home')
    },
    toRegister:function () {
      router.push('register')
    }
  }

  }
</script>
<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
