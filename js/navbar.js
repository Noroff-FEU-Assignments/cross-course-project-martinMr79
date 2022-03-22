const menu = document.querySelector(".menu"); 
const menuItems = document.querySelector(".menu-item"); 
const hamburger = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggle() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu"); 
        closeIcon.style.display = "none"; 
        menuIcon.style.display = "none"; 
    } else {
        menu.classList.add("showMenu"); 
        closeIcon.style.display = "block"; 
        menuIcon.style.display = "none"; 

    }
} 

hamburger.addEventListener("click", toggle)

/*source*/ 
/*https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0*/