<template>
	<div class="wrapper" >
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
/*
<myfile></myfile>


*/
	import mainhead from './mainHead.vue';
	import cloudwarepanel from './cloudwarePanel.vue';

	import auth from '../auth';



	export default{
		name:'home',
		components:{mainhead,cloudwarepanel}
	}
</script>
<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

</style>

