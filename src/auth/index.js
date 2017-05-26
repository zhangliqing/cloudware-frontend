/*
* @Author: zhangliqing
* @Date:   2017-05-16 12:59:18
* @Last Modified by:   zhangliqing
* @Last Modified time: 2017-05-20 12:39:44
*/

'use strict';
import router from '../router'

const API_URL = 'http://api.cloudwarelabs.org/v1/'
const LOGIN_URL = API_URL + 'token'
const USER_URL=API_URL+'users/current'
const SIGNUP_URL=API_URL+'users'
export default {

  user: {
    authenticated: false,
    username:null,
    id:null
  },

  login(context, creds, redirect) {

    context.$http.get(LOGIN_URL, {params:creds}).then(
      response=>{
        localStorage.setItem('id_token', response.body.token)
        this.user.authenticated = true
        var Authorization={Authorization:'Bearer ' + localStorage.getItem('id_token')}

        context.$http.get(USER_URL,{headers:Authorization}).then(
          (data)=>{
                  this.user.username=data.body.username
                  this.user.id=data.body.id},
          (data)=>{context.error=data}
        )

        if(redirect) {
          router.push(redirect)
        }
      },
      response=>{context.error=response})
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds).then(
        response=>{
          console.log('注册成功')
          router.push(redirect)
      },response=>{
          context.error=response
      }
    )
  },

  logout(redirect) {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
    if (redirect) {
      router.push(redirect)
    }
  },

  checkAuth() {

    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

}
