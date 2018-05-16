<template>
  <div class="hello">
    <qd-header></qd-header>
    <qdBanner></qdBanner>
    <qd-nav></qd-nav>
    <div class="container-fluid m" id="zt">
      <div class="container m0 bod">
        <ol class="breadcrumb jjk20 z16 top10">
          <li><b><i class="fa fa-code"></i>最新插件</b> <span class="zhe">Latest jQuery plugin</span></li>
        </ol>

        <div class="col-lg-4 col-md-3 col-sm-4">
          <a href="http://www.jq22.com/jquery-info18998" target="_blank">
            <img src="http://assets.jq22.com/plugin/2018-05-16-00-59-21.png"></a>
          <div class="cover-info">
            <a href="http://www.jq22.com/jquery-info18998" target="_blank">
              <h4>jQuery大图切换带文字动态效果</h4>
            </a>
            <small>前人种树后人乘凉，在原基础上修改样式，感觉这样之后比较常用</small>
          </div>
          <div class="cover-fields">
            <i class="fa fa-list-ul"></i>&nbsp;
            幻灯片和轮播图
          </div>
          <div class="cover-stat">
            <i class="fa fa-eye"></i><span class="f10">&nbsp;705</span>
            <i class="fa fa-heart"></i><span class="f10"> &nbsp;11</span>
            <div class="cover-yh">
              <a href="mem31852" data-container="body" data-toggle="popover" data-placement="top" data-content="SunRoad ">
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
    </div>

  </div>
</template>

<script>
import qdHeader from '@/components/Header'
import qdBanner from '@/components/Banner'
import qdNav from '@/components/Nav'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    qdHeader,
    qdBanner,
    qdNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .m, .mn {
    margin-top: 455px
  }

  .banner {
    height: 404px
  }

  .nav-bg, .nav-bgn {
    top: 455px
  }

  .banseo {
    top: 126px
  }

  .ifbk {
    height: 172px;
    overflow: hidden;
  }

  .ifbk iframe {
    width: 200%;
    height: 200%;
    background: white;
    border: 0;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: top left;
    -moz-transform: scale(0.5);
    -moz-transform-origin: top left;
    -ms-transform: scale(0.5);
    -ms-transform-origin: top left;
    -o-transform: scale(0.5);
    -o-transform-origin: top left;
    transform: scale(0.5);
    transform-origin: top left;
  }

  .posts-nav .next a {
    background: #ffffff url('/static/image/ico-pagination-arrow-next.png') no-repeat center;
    width: 144px;
    height: 53px;
    line-height: 53px;
  }

  .navbar-inverse {
    background-color: #000;
    border-bottom: 1px solid #212121;
  }

  .zhe {
    color: #262626;
    font-family: Vrinda
  }

  .wh {
    height: 10px
  }

  .banseo2 {
    width: 728px;
    height: 15px;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    top: 190px;
    border-radius: 15px;
    z-index: 99;
  }

  .banseo {
    width: 728px;
  }

  .bantxt {
    width: 100%;
    height: 60px;
    opacity: 1;
    background-color: #eceff1;
    border-radius: 5px;
    border: 0px;
    padding-left: 50px;
    color: #000
  }

  .banbutt {
    height: 60px;
    width: 173px;
    background-color: #ec4d1c;
    border: 0px;
    color: #fff;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    transition: all .7s ease 0s;
    font-size: 15px;
    background: -webkit-linear-gradient(top, #f4511e 0, #d84315 100%);
    background: linear-gradient(to bottom, #f4511e 0, #d84315 100%);
  }

  .banbutt:hover {
    background-color: #ed3800;
    background: -webkit-linear-gradient(top, #f03900 0, #bb2c00 100%);
    background: linear-gradient(to bottom, #f03900 0, #bb2c00 100%);
  }

  .seoicn {
    position: absolute;
    left: 20px;
    bottom: -96px;
    color: #b0bec5;
    font-size: 18px
  }

  .banjz {
    padding-bottom: 20px;
  }

  input::-webkit-input-placeholder {
    color: #b0bec5;
    opacity: 1;
  }

  @media screen and (max-width: 770px) {
    .banseo {
      width: 85%;
    }
    .banbutt {
      width: 123px
    }
  }

  .bjtx {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: rgba(255, 255, 255, 0.13);
    padding: 3px;
    font-size: 12px;
    color: #656565;
    border-radius: 5px;
    cursor: pointer
  }

  .banjz {
    padding-bottom: 40px;
  }

  .banseo {
    top: 126px;
  }

  .banseo2 {
    text-align: right
  }

  .banseo2 a {
    color: #fff;
    opacity: .7
  }
</style>
