<template>
  <div class="site">
    <qd-header></qd-header>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="panel panel-default">
            <div class="panel-heading">
              <form class="form-inline">
                <div class="row">
                  <div class="col-xs-6">
                    <button type="button" class="btn btn-default">源代码：</button>
                  </div>
                  <div class="col-xs-6 text-right">
                    <!--<button type="button" class="btn btn-success"><span class="glyphicon glyphicon-send"></span> 点击运行</button>-->
                  </div>
                </div>
              </form>
            </div>
            <div class="panel-body">
              <codemirror :value="code"
                          :options="cmOptions"
                          :style="{height}"
                          @input="onCmCodeChange">
              </codemirror>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="panel panel-default">
            <div class="panel-heading">
              <button type="button" class="btn btn-default">运行结果</button>
            </div>
            <div class="panel-body">
              <div id="iframewrapper" :style="{height}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qdHeader from '@/components/Header'
export default {
  name: 'Site',
  created () {
    this.autodivheight()
    window.addEventListener('resize', this.autodivheight)

    const params = this.$route.params
    this.$http.get('/api/v1/sites/' + params.id)
      .then((response) => {
        const result = response.data
        this.base = result.data.base
        this.code = result.data.html.toString()
      })
  },
  data () {
    return {
      base: '',
      height: '',
      code: 'const A = 10',
      cmOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/html',
        theme: 'monokai',
        lineNumbers: true,
        line: true
      }
    }
  },
  methods: {
    onCmCodeChange (newCode) {
      var text = newCode
      var patternHtml = /<html[^>]*>((.|[\n\r])*)<\/html>/im
      var patternHead = /<head[^>]*>((.|[\n\r])*)<\/head>/im
      var arrayMatchesHead = patternHead.exec(text)
      var patternBody = /<body[^>]*>((.|[\n\r])*)<\/body>/im

      var arrayMatchesBody = patternBody.exec(text)
      var basepathFlag = 1
      var basepath = ''
      if (basepathFlag) {
        basepath = '<base href="' + this.base + '" target="_blank">'
      }
      if (arrayMatchesHead) {
        text = text.replace('<head>', '<head>' + basepath)
      } else if (patternHtml) {
        text = text.replace('<html>', '<head>' + basepath + '</head>')
      } else if (arrayMatchesBody) {
        text = text.replace('<body>', '<body>' + basepath)
      } else {
        text = basepath + text
      }
      var ifr = document.createElement('iframe')
      ifr.setAttribute('src', this.base)
      ifr.setAttribute('frameborder', '0')
      ifr.setAttribute('id', 'iframeResult')
      document.getElementById('iframewrapper').innerHTML = ''
      document.getElementById('iframewrapper').appendChild(ifr)

      var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument
      ifrw.document.open()
      ifrw.document.write(text)
      ifrw.document.close()
    },
    autodivheight () {
      var winHeight = 0
      if (window.innerHeight) {
        winHeight = window.innerHeight
      } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight
      }
      // 通过深入Document内部对body进行检测，获取浏览器窗口高度
      if (document.documentElement && document.documentElement.clientHeight) {
        winHeight = document.documentElement.clientHeight
      }
      var height = winHeight * 0.68
      this.height = height + 'px'
    }
  },
  components: {
    qdHeader
  }
}
</script>
<style scoped>
  .site {
    padding-top: 70px;
  }
  .row > div{
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  .container {
    width: 98%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
  }
</style>
