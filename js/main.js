const menu =document.getElementById("menu");
const rightNav=document.querySelector(".right-nav");
const iconClose=document.querySelector(".icon-close");
const navLinks=document.querySelectorAll(".nav-links");
const loginPage=document.getElementById("logIn-page");
const loginNavBtn=document.querySelectorAll(".login-nav-btn");
const mainPage=document.getElementById("main-page");
const subImage=document.querySelectorAll(".sub-image");
const imageMain=document.getElementById("image-main");
const displayNavRight=()=>rightNav.style.display='block';    
const closeNavRight=()=>rightNav.style.display='none';    
const displayPages=(page)=>page.style.display='block';
const hidePages =(page)=>page.style.display='none';
const functionsCall=(display , hide)=>{
    displayPages(display);
    hidePages(hide);
}

const srcImage=(image)=>imageMain.src=image.src
subImage.forEach((image)=>image.addEventListener("click" ,()=> srcImage(image)))
loginNavBtn.forEach((btn)=>btn.addEventListener("click",()=>functionsCall(loginPage , mainPage)));
navLinks.forEach((link)=>link.addEventListener("click" ,()=>functionsCall(mainPage , loginPage)));
menu.addEventListener('click',displayNavRight);
iconClose.addEventListener("click" ,closeNavRight);