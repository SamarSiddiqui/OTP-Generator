const button = document.getElementById("otp-btn")
const input = document.querySelector('input')

function otpGenerator () {
 window.addEventListener('DOMContentLoaded', ()=>{
  button.addEventListener('click',()=>{
   let randomOtp = Math.floor(Math.random() * 1000000)
   input.value = randomOtp 
  })
 })
}

otpGenerator()
// let array = [1,2,3,4,5,6]

// for(let i=1;i<=6;i++){

// console.log(i);
// }
