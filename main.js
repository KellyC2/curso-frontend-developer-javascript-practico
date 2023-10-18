const menuEmail=document.querySelector(".navbar-email");
const menuHamIcon=document.querySelector(".menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");


const DesktopMenu =document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu");
const aside=document.querySelector(".product-detail");
 
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed= aside.classList.contains("inactive");
    if(!isAsideClosed){
        aside.classList.add("inactive");
    }    
    DesktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    const isAsideClosed= aside.classList.contains("inactive");
    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed= menuEmail.classList.contains("inactive")

    if(!isMobileMenuClosed||!isDesktopMenuClosed ){
        mobileMenu.classList.add("inactive");
        DesktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");     
}