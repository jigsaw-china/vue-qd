<template>
  <div class="home">
    <qd-header></qd-header>
    <qd-banner @searchEv="search"></qd-banner>
    <qd-nav @navEv="tagsClick"></qd-nav>
    <div class="container-fluid m" id="zt">
      <div class="m0 bod">
        <qd-main
          v-show="!filters.active"
          v-for="item in mains"
          v-bind:key="item.id"
          v-bind:title="item.title"
          v-bind:sites="item.sites"
        ></qd-main>
        <qd-main
          v-show="filters.active"
          v-bind:title="filters.title"
          v-bind:sites="filters.sites"
        ></qd-main>
      </div>
    </div>
    <qd-footer></qd-footer>
  </div>
</template>

<script>
import qdHeader from '@/components/Header'
import qdBanner from '@/components/Banner'
import qdNav from '@/components/Nav'
import qdMain from '@/components/Main'
import qdFooter from '@/components/Footer'

export default {
  name: 'Home',
  created () {
    // 热门
    this.$http.get('/api/v1/sites?type=hot')
      .then((response) => {
        const result = response.data
        this.mains[0].sites = result.data
      })
    // 最新
    this.$http.get('/api/v1/sites?type=new')
      .then((response) => {
        const result = response.data
        this.mains[1].sites = result.data
      })
    // 常用
    this.$http.get('/api/v1/sites?type=com')
      .then((response) => {
        const result = response.data
        this.mains[2].sites = result.data
      })
  },
  data () {
    return {
      mains: [
        {
          id: 1,
          title: '热门模板',
          sites: ''
        },
        {
          id: 2,
          title: '最新模板',
          sites: ''
        },
        {
          id: 3,
          title: '常用模板',
          sites: ''
        }
      ],
      filters: {
        title: '筛选结果',
        sites: [],
        active: false
      }
    }
  },
  methods: {
    tagsClick (tags) {
      if (tags.length > 0) {
        this.$http.get('/api/v1/sites?tags=' + tags.toString())
          .then((response) => {
            const result = response.data
            this.filters.sites = result.data
            this.filters.active = true
          })
      } else {
        this.filters.active = false
      }
    },
    search (keyword) {
      if (keyword) {
        this.$http.get('/api/v1/search?keyword=' + keyword)
          .then((response) => {
            const result = response.data
            this.filters.sites = result.data
            this.filters.active = true
          })
      } else {
        this.filters.active = false
      }
    }
  },
  components: {
    qdHeader,
    qdBanner,
    qdNav,
    qdMain,
    qdFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .col-md-3 > a{
    height: 200px;
    overflow: hidden;
  }
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
