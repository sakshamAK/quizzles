const card = document.querySelectorAll(".flip-card");
const rules = document.querySelectorAll(".quiz-rules");
const flip = document.querySelectorAll(".flip-card .flip-btn");
const signin = document.querySelector("#sign_in");
const signup = document.querySelector("#sign_up");
const signinCont = document.querySelector(".signin");
const signupCont = document.querySelector(".signup");
const menu = document.querySelector(".menu");
const Close = document.querySelector(".close");
const dropDown = document.querySelector(".drop-down");
Object.values(flip).map((item, idx) => {
    item.addEventListener("click", () => {
        card[idx].classList.toggle("flipit");
    })
})
Object.values(rules).map((item, idx) => {
    item.addEventListener("click", () => {
        card[idx].classList.toggle("flipit");
    })
})

menu.addEventListener("click", () => {
    dropDown.style.top = 0;
    dropDown.style.transition = "top 0.3s ease-in-out"
})
Close.addEventListener("click", () => {
    dropDown.style.top = "-100vh";
    dropDown.style.transition = "top 0.3s ease-in-out"
})

signin.addEventListener("click", () => {
    signinCont.classList.add("show")
    signupCont.classList.remove("show")
})

signup.addEventListener("click", () => {
    signinCont.classList.remove("show")
    signupCont.classList.add("show")
})

