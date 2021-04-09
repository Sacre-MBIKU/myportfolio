
let hamburgerButton = document.getElementById("navBar")

let hamburgerMenu = document.getElementById("menu-bar")

let hamburgerCross = document.querySelector(".menu-bar-parts--cross-icon i")

let hamburgerLinks = document.querySelectorAll(".menu-bar-parts a")

hamburgerButton.addEventListener("click", ()=>{
    hamburgerMenu.style.display = "flex"
})

hamburgerCross.addEventListener("click", ()=>{
    hamburgerMenu.style.display = "none"
})

for(let i = 0; i < hamburgerLinks.length; i++){
    hamburgerLinks[i].addEventListener("click",()=>{
        hamburgerMenu.style.display = "none"
    })
}