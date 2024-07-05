const menu =document.getElementById("menu");
const rightNav=document.querySelector(".right-nav");
const iconClose=document.querySelector(".icon-close");

const displayNavRight=()=>rightNav.style.display='block';    
const closeNavRight=()=>rightNav.style.display='none';    


menu.addEventListener('click',displayNavRight)//navRight.style.display="block")
iconClose.addEventListener("click" ,closeNavRight)