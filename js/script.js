// header scroll animation
const header=document.querySelector('#head');

document.addEventListener("scroll",()=>{
    header.classList.toggle("scroll",window.scrollY>50)
})

// AOS animation
AOS.init();
