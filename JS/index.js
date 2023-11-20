
// constantes para los items del menu de navegacion
 const navbarItems=document.querySelector(".sidebar").querySelectorAll("li");
 const navbar=document.querySelector(".sidebar");

 navbarItems.forEach(element => {
    element.addEventListener("click",function(){
        navbarItems.forEach(nav=>nav.classList.remove("active")); 
           this.classList.add("active");
    })
});
// constantes para el menu de navegacion
const close=document.querySelector(".close-btn");
const open=document.querySelector(".open-btn");

open.addEventListener("click",() => {

    if (navbar.classList[3]=="active"){
        navbar.classList.remove("active");
    }
    else{
        navbar.classList.add("active");
    }

     console.log(navbar.classList);
})

// close.addEventListener("click",() => {
//     navbar.classList.remove("active");
// })







// const toggle= document.querySelector(".nav-toggle");
// const nav_menu= document.querySelector(".nav-menu");
// const nav_link =document.querySelector(".nav-link");
// toggle.addEventListener("click",()=>{
//     nav_menu.classList.toggle("menu-active");
// })

// nav_link.addEventListener("click",()=>{
//     nav_menu.classList.remove("menu-active")
// })