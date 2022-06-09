//
var headerBg = document.getElementById('background')
window.addEventListener('scroll',function(){
  // headerBg.style.opacity = 1 - +this.window.pageYOffset/1300+''
  headerBg.style.top = +this.window.pageYOffset+'px'
  headerBg.style.backgroundPositionY = - +this.window.pageYOffset/8.6+'px'
})
//
import { projectData } from "./project-data.js"

  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.links')
  const links = document.querySelectorAll('.links li')
  const gitBtn = document.getElementById('git')
  const resBtn = document.getElementById('resume')
  const cardContainer = document.getElementById('card-container')
  const gitBtn2 = document.getElementsByClassName('.btn-primary')
  const contact = document.getElementById('contact')
  const about = document.getElementById('about')

  let project = {
    title: 'Tic-Tac-Toe',
    deployment: 'https://dylanj99tictactoe.netlify.app/',
    image: '/assets/images/TicTac.jpg',
    github: 'https://github.com/jonesdy99/ttt-weekend',
    description: 'A Tic-Tac-Toe browser game that utilizes various basic JavaScript and CSS concepts'
  }
  let projectMarkup = projectData.map(project => 
      `
      <div id="card-container">
      <div class="card text-center" style="width: 18rem;">
        <img src="${project.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <div>
            <a href="${project.github}" class="btn btn-primary">Code</a>
            <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
          </div>
        </div>
      </div>
      `
    ).join('')
    cardContainer.innerHTML = projectMarkup
  
  
  

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

gitBtn.addEventListener('click',function(){
  window.open('https://github.com/jonesdy99')
})

resBtn.addEventListener('click',function(){
  window.open('https://www.linkedin.com/in/dylan-j-8b3365122/')
})

// gitBtn2.addEventListener('click',function(){
//   window.open('https://github.com/jonesdy99')
// })
contact.addEventListener('click',function(){
  window.open('contact.html')
})

about.addEventListener('click',function(){
  window.open('about.html')
})