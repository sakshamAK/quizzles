const questbook = {
    ques:[
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],

    ans: [
        
    ]
}

const questions = document.querySelectorAll(".ques");
const answers = document.querySelectorAll("label")
Object.values(questions).map((item, idx) => {
    item.innerText = questbook.ques[idx]
})
Object.values(answers).map((item, idx) => {
    item.innerText = questbook.ans[idx]
})