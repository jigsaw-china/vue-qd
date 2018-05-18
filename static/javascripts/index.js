$(function () {
  var sz = {}
  var zid
  var pd1 = 0
  var pd2 = 0
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
      pd1 = 1
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
