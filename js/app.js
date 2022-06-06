//
var headerBg = document.getElementById('background')
window.addEventListener('scroll',function(){
  headerBg.style.opacity = 1 - +this.window.pageYOffset/1300+''
  headerBg.style.top = +this.window.pageYOffset+'px'
  headerBg.style.backgroundPositionY = - +this.window.pageYOffset/2+'px'
})
//
const navSlide=() => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.links')
  burger.addEventListener('click',() => {
    nav.classList.toggle('links-active')
  })
}

navSlide()