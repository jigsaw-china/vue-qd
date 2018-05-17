<template>
  <div class="container">
    <ol class="breadcrumb jjk20 z16 top10">
      <li><b><i class="fa fa-code"></i>{{ title }}</b> <span class="zhe"></span></li>
    </ol>

    <div class="col-lg-4 col-md-3 col-sm-4" v-for="item in sites" :key="item.id">
      <router-link :to="{ path: 'site/' + item.id}">
        <img :src="item.image">
      </router-link>
      <div class="cover-info">
        <router-link :to="{ path: 'site/' + item.id}">
          <h4>{{ item.title }}</h4>
        </router-link>
        <small>{{ item.des }}</small>
      </div>
      <div class="cover-fields">
        <i class="fa fa-list-ul"></i>&nbsp;
        {{ item.cate }}
      </div>
      <div class="cover-stat">
        <i class="fa fa-eye"></i><span class="f10">&nbsp;{{ item.visit_count }}</span>
        <!--<i class="fa fa-heart"></i><span class="f10"> &nbsp;{{ item.visit_count }}</span>-->
        <div class="cover-yh">
          <a href="javascript:;" data-container="body" data-toggle="popover" data-placement="top" data-content="">
            <i class="fa fa-user-secret"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="posts-nav-wrap" style="margin-bottom: 30px">
      <ul class="posts-nav">
        <li class="next"><a href="jq1-jq" class="next">←</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['title', 'sites'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>
