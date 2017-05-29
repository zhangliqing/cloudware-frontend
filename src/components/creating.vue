<template>
  <div>
    <div class="panel-primary col-lg-2 col-md-3 col-sm-4 " style="margin-top:20px; border: 1px">
      <div class="panel-heading" style="height: 48px;text-align: center">
        <h3 class="panel-title" style="margin-top: 0.5em;">新建云件</h3>
      </div>
      <div class="panel-body">
        <a>
          <div class="icon" style="margin-top: 50px;text-align: center">
            <i class="fa fa-plus" style="font-size: 60px; " data-toggle="modal" data-target="#myModal"></i>
          </div>
        </a>
      </div>

    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">云件配置</h4>
            </div>
            <div class="modal-body">
              <form class="form-horizontal box">
                <fieldset>
                  <div class="form-group">
                    <label for="select" class="col-lg-2 control-label"><b>云件：</b></label>
                    <div class="col-lg-10">
                      <select class="form-control" id="select" v-model="name">
                        <option>Matlab</option>
                        <option>AutoCAD</option>
                        <option>Eclipse</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="select" class="col-lg-2 control-label"><b>CPU：</b></label>
                    <div class="col-lg-10">
                      <select class="form-control" id="select" v-model="cpu">
                        <option>1核</option>
                        <option>2核</option>
                        <option>4核</option>
                      </select>

                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="select" class="col-lg-2 control-label"><b>内存：</b></label>
                    <div class="col-lg-10">
                      <select class="form-control" id="select" v-model="memory">
                        <option>512M</option>
                        <option>1024M</option>
                      </select>
                    </div>
                  </div>

                </fieldset>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click="createCloudware()">确定</button>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script type="text/javascript">
  var cloudwareMeta={
    "Matlab":{description:"matlab是一款科学计算软件",src:"../../static/img/matlab.ico"},
    "AutoCAD":{description:"autocad是一款设计软件",src:"../../static/img/autocad.jpeg"}
  }
	export default{
		name:'creating',
    data(){
      return{
        name:'Matlab', cpu:'1核', memory:'512M'
      }
    },
		methods: {
			createCloudware(){
        console.log("发出createCloudware")
        var data={name:this.name,
          cpu:this.cpu,
          memory:this.memory,
          description:cloudwareMeta[this.name].description,
          src:cloudwareMeta[this.name].src,
          isCreated:false
        }
        this.$emit('createCloudware',data)
			},
		}
	}

</script>

