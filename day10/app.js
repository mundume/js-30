
const sidebar = document.querySelector('.sidebar')
const btn = document.querySelector('.sidebar-toggle')
const closebtn = document.querySelector('.close-btn')
const links = document.querySelector('.links')

btn.addEventListener('click', show)
 function show (){
    sidebar.classList.toggle('show-sidebar')
 }

 closebtn.addEventListener('click', close)

 function close(){
   sidebar.classList.remove('show-sidebar')
 }