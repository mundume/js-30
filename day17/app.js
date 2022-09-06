const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let temp = new Date()
let tempYear = temp.getFullYear()
let tempMonth = temp.getMonth()
let tempDay = temp.getDate()

//set the future date variable
const futureDate = new Date (tempYear, tempMonth, tempDay+10, 11,30,0)

const year = futureDate.getFullYear()
const hours = futureDate.getDate()
const minutes = futureDate.getMinutes()
let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()
 let weekDay = futureDate.getDay()
 weekDay=weekdays[weekDay]



giveaway.textContent = `giveaway ends in ${weekDay}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

//future time in ms
const futureTime = futureDate.getTime()
//get remainig time
function getRemainingTime(){
const today = new Date().getTime()
const t = futureTime - today
 const oneDay = 24 * 60 * 60 * 1000
 const oneHour = 60 * 60 * 1000
 const oneMinute = 60*1000
 let days = t/oneDay
days = Math.floor(days)
let hours = Math.floor((t%oneDay)/oneHour)
let minutes= Math.floor((t%oneHour)/oneMinute)
let seconds= Math.floor((t%oneMinute)/1000)

//set values array
const values= [days, hours, minutes, seconds]
function format(item){
  if(item<10){
    return item = `0${item}`
  }
  return item
}
items.forEach((item, index)=>{
  item.innerHTML = format(values[index])
})

if(t<0){
  clearInterval(countdown)
  deadline.innerHTML = `<h4 class="expired">sorry this offer has expired</h4>`
}
console.log(values)
console.log(hours)
}

let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()