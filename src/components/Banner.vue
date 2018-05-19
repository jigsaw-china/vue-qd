<template>
  <div class="container-fluid banner banbk">
    <div class="banseo2">
      <a href="javascript:;" target="_blank" onclick="">web前端站</a>
    </div>
    <div class="banseo">
      <div class="banjz"><img src="static/image/ggc.png" /></div>
      <input type="text" class="bantxt" id="searchtxt" placeholder="输入关键字.." v-model="keyword"><button class="btn banbutt" type="button" @click="search()"><i class="fa fa-chevron-circle-right"></i>找到你想要的</button>
      <span class="seoicn"><i class="fa fa-search"></i></span>
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
      keyword: ''
    }
  },
  methods: {
    search () {
      this.$emit('searchEv', this.keyword)
      this.keyword = ''
    }
  }
}
</script>

<style scoped>
</style>
