const menu = document.querySelector(".menu"); 
const menuItems = document.querySelectorAll(".menu-item"); 
const hamburger = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggle() {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu"); 
        closeIcon.style.display = "none"; 
        menuIcon.style.display = "block"; 
    } else {
        menu.classList.add("show-menu"); 
        closeIcon.style.display = "block"; 
        menuIcon.style.display = "none"; 

    }
} 

hamburger.addEventListener("click", toggle)

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggle);
    }
)



/*inspired by:*/ 
/*https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0*/