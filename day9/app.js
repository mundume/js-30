// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const showNav  = document.querySelector('.links')

navToggle.addEventListener('click', show)


function show(){
    showNav.classList.toggle('show-links')
}