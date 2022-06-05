//
var headerBg = document.getElementById('background')
window.addEventListener('scroll',function(){
  headerBg.style.opacity = 1 - +this.window.pageYOffset/1300+''
  headerBg.style.top = +this.window.pageYOffset+'px'
  headerBg.style.backgroundPositionY = - +this.window.pageYOffset/2+'px'
})
//

