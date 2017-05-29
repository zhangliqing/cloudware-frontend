<template>
  <div style="height: 100%">
    <div id="particles-js"></div>
    <div class="loginpanel">
      <h1>Cloudware Lab</h1>
        <div class="panel panel-primary" style="width: 70%;margin: 20px auto">
          <div class="panel-heading">
            <div class="panel-title" style="display: inline-block">用户注册</div>
          </div>
          <div style="padding-top:30px" class="panel-body">
            <form id="registerForm" class="form-horizontal" role="form" >
              <div style="margin: 20px auto" class="input-group">
                <input type="text" class="form-control" name="user_name" placeholder="姓名" tips="请输入一个 2-14 位的用户名" errortips="用户名长度不符合" v-model="username">
              </div>
              <div style="margin: 20px auto" class="input-group">
                <input type="password" class="form-control" name="password" placeholder="密码，不少于6位" tips="请输入 6-16 个字符,区分大小写" errortips="密码不符合规则"  v-model="password">
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
    mounted(){
      particlesJS('particles-js',
        {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#d1d1d1"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#d1d1d1",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "config_demo": {
            "hide_card": false,
            "background_color": "#f7fafc",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
          }
        }
      );
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
