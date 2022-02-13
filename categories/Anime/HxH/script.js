const questbook = {
    ques:[
        "Leorio desires be a successful:",
        "Who made a wildcard entry in the Hunter Association’s Chairman Election?",
        "Gon has been working hard to pass the:",
        "Gon lives on:",
        "Who is not a villain in the anime?",
        "Gon wishes to be a/an:",
        "Gittarucker turned out to be Killua’s:",
        "What does a hunter do? (in the anime)",
        "Who are Gon’s best friends?",
        "What was the name of Killua’s family?"
    ],

    ans: [
        "Fighter",
        "Writer",
        "Doctor",
        "Artist",
        "Pariston",
        "Cheadle",
        "Leorio",
        "Nothing like this happened",
        "Hunter exams",
        "University exams",
        "College exams",
        "School exams",
        "Shark island",
        "Dolphin island",
        "Whale island",
        "None of these",
        "Hisoka",
        "Meruem",
        "Chrollo",
        "Ging",
        "Hunter",
        "Jester",
        "Investigator",
        "Cop",
        "Brother",
        "Father",
        "Cousin",
        "Friend",
        "Traces unidentified animal species",
        "Finds treasures",
        "Explores lost enclaves",
        "All of these",
        "Mereum, Palm, and Silva",
        "Illumi, Kurapika, and Genthru",
        "Hisoka, Killua, and Chrolla",
        "Kurapika, Leorio and Killua",
        "Zoldyck",
        "Goldyck",
        "Moldyck",
        "Holdyck"
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
