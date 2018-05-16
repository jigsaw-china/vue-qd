<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
        <a class="navbar-logo" href="http://www.jq22.com/"><img src="http://www.jq22.com/img/logo.png" height="100%"
                                                                alt="jQuery插件,jQuery,jQuery特效.jQuery ui,jQuery 教程,css3,网页特效,JS特效"></a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://www.jq22.com/webide"><i class="fa fa-edit"></i> &nbsp;在线编辑器</a></li>
          <li><a href="http://www.jq22.com/daima"><i class="fa fa-code"></i> &nbsp;在线代码</a></li>
          <li><a href="http://www.jq22.com/textDifference"><i class="fa fa-balance-scale" aria-hidden="true"></i> &nbsp;文本比较</a></li>
          <li><a href="http://www.jq22.com/jquery-info122"><i class="fa fa-download"></i> &nbsp;jQuery下载</a></li>
          <li><a href="http://www.jq22.com/jquery/jquery.html" target="_blank"><i class="fa fa-ship" aria-hidden="true"></i> &nbsp;前端库</a></li>
          <li><a href="http://www.jq22.com/chm/jquery/index.html" target="_blank"><i class="fa fa-book"></i> &nbsp;在线手册</a></li>
          <li class="dropdown"><a rel="nofollow" href="http://weibo.com/jq22" target="_blank"><i class="fa fa-weibo"></i> &nbsp;微博</a></li>
          <li>
            <a href="#" data-toggle="modal" data-target="#myModal">
              <i class="fa fa-user"></i> &nbsp;注册/登录<span class="sr-only">(current)</span>
            </a>
          </li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
