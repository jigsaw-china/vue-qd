<template>
  <div class="container-fluid banner banbk">
    <div class="banseo2">
      <a href="http://web.tanzhouedu.com/index/keCourse.html" target="_blank" onclick="adtonji3()">web前端直播课 : 在线直播教学+课后录播视频</a>
    </div>
    <div class="banseo">
      <div class="banjz"><img src="static/image/ggc.png" /></div><input type="text" class="bantxt" id="searchtxt" placeholder="输入插件关键字.." onkeyup="autoComplete.start(event)"><button class="btn banbutt" type="button" id="seobut"><i class="fa fa-chevron-circle-right"></i>找到你梦想</button><span class="seoicn"><i class="fa fa-search"></i></span>
    </div>
    <div class="bjtx" data-toggle="tooltip" data-placement="left" title="" data-original-title="如果您的电脑配置较低，请关闭背景特效">关闭背景特效</div>
    <iframe class="baniframe" sandbox="allow-scripts allow-same-origin" id="mh"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      msg: 'Welcome to Site'
    }
  }
}
</script>

<style scoped>
</style>
