const signin = document.querySelector("#sign_in");
const signup = document.querySelector("#sign_up");
const signinCont = document.querySelector(".signin");
const signupCont = document.querySelector(".signup");


signin.addEventListener("click", () => {
    signinCont.classList.add("show")
    signupCont.classList.remove("show")
})

signup.addEventListener("click", () => {
    signinCont.classList.remove("show")
    signupCont.classList.add("show")
})

