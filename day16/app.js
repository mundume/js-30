const btn = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

 about.addEventListener('click', (e)=>{
    const id = e.target.dataset.id
    if(id){
        //target the dataset attribute
    btn.forEach(button=>button.classList.remove('active'))
    e.target.classList.add('active')

    articles.forEach(articles=>articles.classList.remove('active'))
    const element = document.getElementById(id)
    element.classList.add('active')
    }
     
       
    
   
 })