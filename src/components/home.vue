<template>
	<div class="wrapper">
		<mainhead></mainhead>
		<cloudwarepanel></cloudwarepanel>

		<footer class="footer">
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
  .footer{position:absolute;bottom:0;width:100%;height:30px;clear:both; text-align: center}

</style>

