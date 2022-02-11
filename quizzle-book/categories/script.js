const card = document.querySelectorAll(".flip-card");
const rules = document.querySelectorAll(".quiz-rules");
const flip = document.querySelectorAll(".flip-card .btn");
const signin = document.querySelector("#sign_in");
const signup = document.querySelector("#sign_up");
const signinCont = document.querySelector(".signin");
const signupCont = document.querySelector(".signup");
Object.values(flip).map((item, idx) => {
    item.addEventListener("click", () => {
        card[idx].classList.toggle("flipit");
        console.log(item, card[idx])
    })
})
Object.values(rules).map((item, idx) => {
    item.addEventListener("click", () => {
        card[idx].classList.toggle("flipit");
    })
})


signin.addEventListener("click", () => {
    signinCont.classList.add("show")
    signupCont.classList.remove("show")
})

signup.addEventListener("click", () => {
    signinCont.classList.remove("show")
    signupCont.classList.add("show")
})