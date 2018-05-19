<template>
  <div class="yn jz container-fluid nav-bgn m0" id="menu_wrap">
    <div class="container m0" style="position:relative;">
      <span v-for="(item,index) in cates" :key="item.id">
        <span v-if="index">|</span>
        <router-link class="nzz" :id="'z' + (index + 1)" :to="{ path: 'cate/' + item.id}">
          <span class="sort">
            <i :class="'fa '+ item.iconfont"></i>&nbsp;{{ item.title }} <i class="fa fa-angle-down"></i>
          </span>
        </router-link>
      </span>
    </div>
    <div class="container-fluid">
      <div id="n1" class="nav-zi ty" style="display: none;">
        <ul v-for="(item,index) in cates" :key="item.id" :id="'nz' + (index + 1)" class="nn list-inline container m0" style="display: none;">
          <li v-for="tag in item.tags" :key="'tag' + tag.id">
            <a class="c-btn c-btn--border-line" @click.stop="addTags(tag.id)" :class="{ active: tags.includes(tag.id) }">
              <i class="fa ls"></i>{{ tag.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jquery'
export default {
  name: 'Nav',
  created () {
    // 所有分类
    this.$http.get('/api/v1/cates')
      .then((response) => {
        const result = response.data
        this.cates = result.data
        this.navHover()
      })
  },
  data () {
    return {
      cates: '',
      tags: []
    }
  },
  methods: {
    addTags (id) {
      if (this.tags.includes(id)) {
        this.tags.splice(this.tags.indexOf(id), 1)
      } else {
        this.tags.push(id)
      }
    },
    navHover () {
      $(function () {
        var sz = {}
        var zid
        $('.nzz').hover(function () {
          zid = $(this).attr('id')
          sz[ zid + '_timer' ] = setTimeout(function () {
            $('#zt').addClass('mh')
            $('.nn').css('display', 'none')
            $('.nav-zi').css('display', 'block')
            $('#n' + zid).css('display', 'block')
            $('#n' + zid).addClass('nadc')
            $('.nzz').removeClass('nav-zibg')
            $('#' + zid).addClass('nav-zibg')
          }, 100)
        },
        function () {
          clearTimeout(sz[ zid + '_timer' ])
        })

        $('.yn').mouseleave(function () {
          $('.nav-zi').css('display', 'none')
          $('#zt').removeClass('mh')
          $('.nzz').removeClass('nav-zibg')
        })
      })
    }
  },
  watch: {
    tags: {
      handler (val) {
        this.$emit('navEv', val)
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1220px) {
  .azj {
    display: none
  }
}
</style>
