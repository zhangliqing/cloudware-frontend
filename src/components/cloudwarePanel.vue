<template>
	<div>
    <div v-show="show">
      <div class="alert alert-dismissible alert-warning" style="width: 960px;margin: 0 auto">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4>注意!</h4>
        <p>云件关闭之后，本次创建的文件将被<b>删除</b>，请及时将所需文件下载到本地。</p>
      </div>
      <div class="container" style="margin:10px 20px" >

        <div v-for="cw in cloudwares">
          <div class="alert col-lg-2 col-md-3 col-sm-4" style="padding-top: 0px">
            <div class="panel-primary  " style="margin-top:20px;">
              <div class="panel-heading" style="height: 48px;">
                <h3 class="panel-title" style="margin-top: 0.5em;display: inline">{{cw.name}}</h3>
                <button type="button" class="close" style="color: #ffffff" data-dismiss="alert">&times;</button>
              </div>
              <div class="panel-body" style="height: 144px;">
                <img class="rounded img-responsive" v-bind:src="cw.src" style="height: 60%; margin:0 auto">
                <p>{{cw.description}}</p>
              </div>
              <div class="panel-footer" style="height: 48px; text-align: center">
                <button class="btn btn-success"  type="button" @click="open(cw)">开启</button>
              </div>
            </div>
          </div>
        </div>

        <creating v-on:createCloudware="addCloudware"></creating>
      </div>
    </div>

    <div v-show="!show">
      <div style="margin: 5px 10px">
        <a @click="backToList" class="fa fa-arrow-left " style="margin-left: 10px">云件列表</a>
        <a @click="fullScreen" class="btn btn-app " style="margin-left: 10px"><i class="fa fa-arrows-alt"></i> 全屏</a>
        <a class="btn btn-app " id="snapshot"><i  class="fa fa-save"></i> 文件</a>
      </div>
      <div id="matlab" v-show="activeCloudware=='matlab'" style="width: 960px; margin: 0 auto"></div>
      <div id="autocad" v-show="activeCloudware=='autocad'" style="width: 960px; margin: 0 auto"></div>
    </div>
	</div>


</template>
<script type="text/javascript">
	import creating from "./creating.vue"
  var instance=null

	export default{
		name:'cloudwarePanel',
    data(){
      return{
        cloudwares:[],
        show:true,
        activeCloudware:''
      }
    },

		methods:{
      fullScreen:function (){
			    instance.setFullscreen();
			 },
      addCloudware:function(data){
        console.log("收到data")
        this.cloudwares.push(data)
        console.log(this.cloudwares)
      },

      backToList:function (){
        this.show=true
      },
      open(cw){
        this.show=false
        this.activeCloudware=cw.name.toLowerCase()
        if(!cw.isCreated){
          console.log('开始建立……')
          if(instance!=null){
            instance=null
          }
          CL.apiUrl = 'http://api.cloudwarelabs.org/v1'
          CL.token = localStorage.getItem('id_token')
          var that=this
          CL.createInstance('9f8a6d2b-eddf-41f0-bb71-e068d86c7e80', that.activeCloudware, function (err, inst) {
            if (err) {
              alert('error happen');
              console.log(err);
              return;
            }
            instance = inst;
          });
          cw.isCreated=true
        }

      }
		},
		components:{creating}
	}
</script>

<style type="text/css">
	*{
		box-sizing: border-box;
	}
</style>










