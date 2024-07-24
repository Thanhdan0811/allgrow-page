
const toggleHambugerMenu = () => {
    const hambuger = document.getElementById("menu-hambuger");
    const closeHambuger = document.getElementById("close-menu-mobile");
    const leftMenu = document.getElementById("left-menu");


    if(!hambuger || !closeHambuger || !leftMenu) return;

    hambuger.addEventListener("click", () => {
        leftMenu.classList.add("active");
        document.body.style.overflow = "hidden";
    });
    
    closeHambuger.addEventListener("click", (e) => {
        leftMenu.classList.remove("active")
        document.body.style.overflow = "initial";
    });

};

document.addEventListener("DOMContentLoaded", toggleHambugerMenu);