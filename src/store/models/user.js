import 'whatwg-fetch'
import config from '../../../config'

const API_URL = config.API_URL
const LOGIN_URL = API_URL + 'token'
const USER_URL=API_URL+'users/current'
const SIGNUP_URL=API_URL+'users'

export default class User {
  id = ''
  username = ''
  token = ''
  login(creds) {
    return new Promise((resolve, reject) => {
      fetch(LOGIN_URL + '?username=' + creds.username + '&password=' + creds.password).then(resp => {
        resp.json().then(json => {
          this.token = json.token
          localStorage.setItem('token', this.token)
          fetch(USER_URL, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }).then(resp => {
            if (resp.status !== 200) {
              reject()
            } else {
              resp.json().then(json => {
                this.id = json.id
                this.username = json.username
                resolve(this)
              })
            }
          })
        })
      })
    })

  }
  signup(creds) {
    return new Promise((resolve, reject) => {
      fetch(SIGNUP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
      }).then(resp => {
        if (resp.status !== 200) {
          reject()
        } else {
          resolve()
        }
      })
    })

  }
  getInfo() {
    return new Promise((resolve, reject) => {
      fetch(USER_URL, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(resp => {
        if (resp.status !== 200) {
          reject()
        } else {
          resp.json().then(json => {
            this.id = json.id
            this.username = json.username
            resolve(this)
          })
        }

      })
    })

  }
  logout() {
    return new Promise((resolve, rejct) => {
      localStorage.removeItem('token')
      resolve()
    })
  }
}
