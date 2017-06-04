<template>
  <div class="wrapper">
    <div style="min-height: calc(100vh - 50px);">
      <mainhead></mainhead>
      <cloudwarepanel></cloudwarepanel>
    </div>
    <footer style="height: 30px; text-align: center">
      <strong>Copyright &copy; 2017 <a href="#">Cloudware Lab</a>.</strong> All rights reserved.
    </footer>
  </div>
</template>
<script type="text/javascript">

  import mainhead from './mainHead.vue';
  import cloudwarepanel from './cloudwarePanel.vue';

  import store from '../store'
  import router from '../router'
  export default{
    name: 'home',
    components: {mainhead, cloudwarepanel},
    created() {
      store.user.getInfo((err, user) => {
        if (err) {
          router.push('/login')
        }
      })
    }
  }
</script>
<style>


</style>

