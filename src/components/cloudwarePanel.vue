<template>
	<div>
    <div v-show="show">

      <div class="container" style="margin:10px 20px" >

        <div v-for="cw in cloudwares">
          <div class="alert col-lg-3 col-md-3 col-sm-4" style="padding-top: 0px">
            <div class="panel-primary  " style="margin-top:20px;">
              <div class="panel-heading" style="height: 48px;">
                <h3 class="panel-title" style="margin-top: 0.5em;display: inline">{{cw.name}}</h3>
                <button type="button" class="close" style="color: #ffffff" data-dismiss="alert">&times;</button>
              </div>
              <div class="panel-body" style="height: 144px;">
                <img class="rounded img-responsive" v-bind:src="cw.src" style="height: 60%; margin:0 auto">
                <br>
                <p>{{cw.description}}</p>
              </div>
              <div class="panel-footer" style="height: 48px; text-align: center">
                <button class="btn btn-primary" style="width: 60%;" type="button" @click="open(cw)">开 启</button>
              </div>
            </div>
          </div>
        </div>

        <creating v-on:createCloudware="addCloudware"></creating>
      </div>
    </div>

    <div v-show="!show">
      <div style="margin: 5px 10px; " >
        <a @click="backToList" class="fa fa-arrow-left" style="margin-left: 10px">云件列表</a>
        <a @click="fullScreen" class="btn btn-app " style="margin-left: 10px"><i class="fa fa-arrows-alt"></i> 全屏</a>
        <a class="btn btn-app " data-toggle="modal" data-target="#fileModal"><i  class="fa fa-save" ></i> 文件</a>
        <div class="alert alert-dismissible alert-warning" style="display: inline-block;width: 600px; padding: 6px">
          <button type="button" class="close" data-dismiss="alert" style="right: 0px; font-size: 24px">&times;</button>
          <p><strong>注意!</strong> 云件关闭之后，本次创建的文件将被<b>删除</b>，请及时将所需文件下载到本地。</p>
        </div>
        <div class="modal fade" id="fileModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">我的文件</h4>
              </div>
              <div class="modal-body">
                <ul>
                  <fileItem :model="treeData"></fileItem>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="loader" v-show="!activeCloudware.isLoaded" ></div>
      <div v-show="activeCloudware.isLoaded">
        <div id="matlab" v-show="activeCloudware.name=='matlab'" style="width: 960px; margin: 0 auto"></div>
        <div id="autocad" v-show="activeCloudware.name=='autocad'" style="width: 960px; margin: 0 auto"></div>
      </div>

    </div>
	</div>


</template>

<script type="text/javascript">
	import creating from "./creating.vue"
  import fileItem from "./fileItem.vue"
  var instance=null

	export default{
		name:'cloudwarePanel',
    data(){
      return{
        cloudwares:[],
        show:true,
        activeCloudware:{
          name:'',
          isLoaded:false
        },
        treeData:{
          name: 'My Tree',
          children: [
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            }
          ]
        }
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
        this.activeCloudware.name=cw.name.toLowerCase()
        this.activeCloudware.isLoaded=cw.isCreated
        console.log(this.activeCloudware.isLoaded)

        if(!cw.isCreated){
          console.log('开始建立……')
          if(instance!=null){
            instance=null
          }
          CL.apiUrl = 'http://api.cloudwarelabs.org/v1'
          CL.token = localStorage.getItem('id_token')
          var that=this
          CL.createInstance('9f8a6d2b-eddf-41f0-bb71-e068d86c7e80', that.activeCloudware.name, function (err, inst) {
            if (err) {
              alert('error happen');
              console.log(err);
              return;
            }
            instance = inst;
            cw.isCreated=true
            setTimeout(3000)
            that.activeCloudware.isLoaded=cw.isCreated
          });
        }

      },
		},
		components:{creating,fileItem}
	}
</script>

<style type="text/css" scope>

  #loader {
    position: absolute;
    left: 50%;
    top: 60%;
    z-index: 1;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 90px;
    height: 90px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>










