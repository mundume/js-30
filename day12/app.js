//traversing the dom
// const button = document.querySelectorAll('.question-btn')
// const question = document.querySelectorAll('.question')

// button.forEach(btn=>btn.addEventListener('click', (e)=>{
//     const qtn= e.currentTarget.parentElement.parentElement
//     qtn.classList.toggle('show-text')
// }))




// using selector 

const questions = document.querySelectorAll('.question')
questions.forEach(function(question){
const btn = question.querySelector(".question-btn")
console.log(btn)
btn.addEventListener('click', function(){
    questions.forEach(function(item){
    if (item!==question){
        item.classList.remove('show-text')
    }
    })
    question.classList.toggle('show-text')
})
})