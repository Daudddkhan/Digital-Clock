const one = document.querySelector('.one');
const two =document.querySelector('two');
const three =document.querySelector('three');
// const hourr = document.querySelector('hourr');
const minn = document.querySelector('minn');
const secc =document.querySelector('secc')
const tempra=document.querySelector('tempra')
const dayss = document.querySelector('dayss')



const today = new Date();
console.log(today);

one.innerHTML =today.getDate();
two.innerHTML = today.getMonth();

hourr.innerHTML=`${today.getHours()}`;
