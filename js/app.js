//
var headerBg = document.getElementById('background')
window.addEventListener('scroll',function(){
  // headerBg.style.opacity = 1 - +this.window.pageYOffset/1300+''
  headerBg.style.top = +this.window.pageYOffset+'px'
  headerBg.style.backgroundPositionY = - +this.window.pageYOffset/8.6+'px'
})
//
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.links')
  const links = document.querySelectorAll('.links li')

  const navSlide=() => {
  burger.addEventListener('click',function(){
    nav.classList.toggle('links-active')
    links.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + .5}s`
      }
    })
    burger.classList.toggle('toggle')
  })
}
navSlide()