<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
        <a class="navbar-logo" href="javascript:;"><img src="../assets/header-logo.png" height="100%" alt=""></a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="javascript:;"><i class="fa fa-edit"></i> &nbsp;在线编辑器</a></li>
          <li><a href="javascript:;"><i class="fa fa-download"></i> &nbsp;jQuery下载</a></li>
          <li><a href="javascript:;" target="_blank"><i class="fa fa-ship" aria-hidden="true"></i> &nbsp;前端库</a></li>
          <li><a href="javascript:;" target="_blank"><i class="fa fa-book"></i> &nbsp;在线手册</a></li>
          <!--<li>-->
            <!--<a href="#" data-toggle="modal" data-target="#myModal">-->
              <!--<i class="fa fa-user"></i> &nbsp;注册/登录<span class="sr-only">(current)</span>-->
            <!--</a>-->
          <!--</li>-->
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to header'
    }
  }
}
</script>

<style>

</style>
