//
// Slideshow, Simple
//

if (document.getElementsByClassName('slideshow') !== undefined) {
  let cont = document.getElementsByClassName('slideshow')

  for (var i=0; i<cont.length; i++) {
    let slides = cont[i].getElementsByTagName('img')
    let n = 0;
    setTimeout(function() {
      (function advance(s, slideGroup) {
        slideGroup[s].classList.remove("show")
        s = (s+1)%slides.length
        slideGroup[s].classList.add("show")
        setTimeout(function() {
          advance(s, slideGroup)
        }, 4000)
      })(n, slides)
    },4000)

  }

}

//
// Scroll to top
//

window.addEventListener('scroll', function() {
  if (domNav.html.scrollTop > 0) {
    if (page.atTop) {
      dom.scroll.toTop.classList.add('show')
      page.atTop = false
    }
  } else {
    if (!page.atTop) {
      dom.scroll.toTop.classList.remove('show')
      page.atTop = true
    }
  }
})
if (dom.scroll.toTop != undefined) {
  dom.scroll.toTop.addEventListener('click', function(e) {
    e.preventDefault()
    Velocity(document.getElementsByTagName('body')[0], 'scroll', { duration: 500, offset: -300, easing: 'easeOutCubic' } )
  })
  dom.scroll.toTop.addEventListener('touchstart', function(e) {
    e.preventDefault()
    e.stopPropagation()
    Velocity(document.getElementsByTagName('body')[0], 'scroll', { duration: 500, offset: -300, easing: 'easeOutCubic' } )
  },{passive:false})
}