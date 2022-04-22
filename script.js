const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const dropDown = document.querySelector(".drop-down");
menu.addEventListener("click", () => {
    dropDown.style.top = 0;
    dropDown.style.transition = "top 0.3s ease-in-out"
})
close.addEventListener("click", () => {
    dropDown.style.top = "-100vh";
    dropDown.style.transition = "top 0.3s ease-in-out"
})