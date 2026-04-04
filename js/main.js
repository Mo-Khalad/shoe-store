const menu=document.getElementById("menu");
const menu_nav=document.querySelector(".menu-nav");
const rightNav=document.querySelector(".right-nav");
const iconClose=document.querySelector(".icon-close");
const navLinks=document.querySelectorAll(".nav-links");
const loginPage=document.getElementById("logIn-page");
const loginNavBtn=document.querySelectorAll(".login-nav-btn");
const mainPage=document.getElementById("main-page");
const subImage=document.querySelectorAll(".sub-image");
const imageMain=document.getElementById("image-main");
const accordion_body =document.querySelectorAll(".accordion_body")
const accordion_btn = document.querySelectorAll('.accordion_btn');
const accordion_Item = document.querySelectorAll(".accordion_Item");
const angle_down_btns = document.querySelectorAll(".angle_down_btns");
let angle_up_btns  =''

const displayNavRight=()=>{
   rightNav.style.display='block';
   menu_nav.style.display='none'
};

const closeNavRight=()=>{
   rightNav.style.display='none';
   menu_nav.style.display='flex';
};

const displayPages=(page)=>page.style.display='block';
const hidePages =(page)=>page.style.display='none';

const functionsCall=(display , hide)=>{
    displayPages(display);
    hidePages(hide);
}

const hideCommentCustomer=(index)=>{    
   accordion_Item[index].style.height = `60px`;   
   accordion_btn[index].innerHTML = `
   <button class="angle_down_btns justify-content-end" onClick="showCommentCustomer(${index})"> 
   <i class="angle-down fa-solid fa-angle-down fs-3"></i>
   </button>`  
}

const showCommentCustomer = (index)=>{
     accordion_btn.forEach((item , index)=>{
        accordion_btn[index].innerHTML = `
         <button class="angle_down_btns justify-content-end" onClick="showCommentCustomer(${index})"> 
         <i class="angle-down fa-solid fa-angle-down fs-3"></i>
         </button>` 
      })

     accordion_body.forEach((item)=>{
        item.classList.remove('show')
          accordion_btn[index].innerHTML= `<button class="angle_up_btns justify-content-end" onClick="hideCommentCustomer(${index})">   
          <i class="angle-up fa-solid fa-angle-up fs-3"></i>
         </button>
     ` 
        accordion_Item.forEach(item=>item.style.height = `60px`);
     })
      
     accordion_body[index].classList.add('show')
  
      accordion_Item[index].style.height = '340px';   
      angle_up_btns = document.querySelectorAll(".angle_up_btns")
}

angle_down_btns.forEach((btn , index)=>btn.addEventListener('click' , ()=>showCommentCustomer(index)))

const imagesSlider=(image)=>imageMain.src=image.src
 let index = 0

setInterval(()=>{
    index+= 1
  if(index === subImage.length){
    index = 0
 }      
  imagesSlider(subImage[index])
} , 3000 , subImage)

subImage.forEach((image , imgIndex)=>image.addEventListener("click" ,()=> {
    imagesSlider(image)
    index = imgIndex
}))

loginNavBtn.forEach((btn)=>btn.addEventListener("click",()=>functionsCall(loginPage , mainPage)));
navLinks.forEach((link)=>link.addEventListener("click" ,()=>functionsCall(mainPage , loginPage)));
menu.addEventListener('click',displayNavRight);
iconClose.addEventListener("click" ,closeNavRight);