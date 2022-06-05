var headerBg = document.getElementById('background')
window.addEventListener('scroll',function(){
  headerBg.style.opacity = 1 - +this.window.pageYOffset/1000+''
})
