// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')


navToggle.addEventListener('click', ()=>{
    // linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if (containerHeight===0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', ()=>{
  const scrollHeight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height
  if(scrollHeight>navheight){
    navbar.classList.add('fixed-nav')
  }else{
    navbar.classList.remove('fixed-nav')
  }
  if (scrollHeight>500){
    topLink.classList.add('show-link')
  }else{
    topLink.classList.remove('show-link')
  }
})



// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(link=>link.addEventListener('click', (e)=>{
    //prevent defaults
  e.preventDefault()
  //navigaye to specific
  const id = e.currentTarget.getAttribute('href').slice(1)
  const element = document.getElementById(id)
  //calculate the height
  const navheight = navbar.getBoundingClientRect().height
  const containerHeight = linksContainer.getBoundingClientRect().height
  const fixedNav = navbar.classList.contains('fixed-nav')
  let position = element.offsetTop- navheight
  if(!fixedNav){
    position = position
  }
  if(navheight>82){
    position = position + containerHeight
  }
  window.scrollTo(
    {
     left:0,
     top:position
    }
  )
  linksContainer.style.height = 0;

}))