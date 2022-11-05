// burger menu width 1277px upper menu & middle menu decstop
let burgerUpper = document.querySelector(".burger-upper-menu").addEventListener("click", function (){
    document.querySelector(".burger-upper").classList.toggle("cross");
    document.querySelector(".info-nav ul").classList.toggle("menu");
})

let burgerMiddle = document.querySelector(".burger-menu-middle").addEventListener("click", function (){
    document.querySelector(".burger-middle").classList.toggle("cross");
    document.querySelector(".links-nav ul").classList.toggle("menu");
})
///////////////////////
//mobile menu
let burgerMobile = document.querySelector(".mobile-nav-burger").addEventListener("click", function (){
    document.querySelector(".mobile-nav-head").classList.toggle("active");
    document.querySelector(".navig").classList.toggle("active");
    document.querySelector("#wrapper").classList.toggle("displey-none")
})
////mobile menu accordion
document.querySelectorAll(".accordion").forEach((item)=>
       item.addEventListener("click", () =>{
       const acord = item.parentElement;
            acord.classList.toggle("accordion-falling-out");
       })
) 