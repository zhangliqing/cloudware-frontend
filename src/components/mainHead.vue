<template>
	<nav class="navbar navbar-inverse" style="height: 30px">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand">Cloudware</a>
	    </div>
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav navbar-right">
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">欢迎，{{user.username}} <span class="caret"></span></a>
	          <ul class="dropdown-menu" role="menu" style="padding-bottom: 0px">
	            <li style="padding-left: 5px"><b>姓名：</b>{{user.username}}</li>
	            <li style="padding-left: 5px"><b>学号：</b>{{user.id}}</li>
	            <li style="padding-left: 5px">user description</li>
	            <li style="text-align: center;"><button class="btn btn-primary" @click="logout()" style="width: 60%;margin-bottom: 5px"><strong>登 出</strong></button></li>
	          </ul>
	        </li>
	      </ul>
	    </div>
	  </div>
	</nav>
</template>
<script type="text/javascript">
  import store from '../store'
  import router from '../router'
	export default{
		name:'mainHead',
		data(){
			return{
				user: store.user
			}
		},
		methods:{
			logout(){
        store.user.logout().then(() => {
          router.push('/login')
        })
			},
		}
	}
</script>
