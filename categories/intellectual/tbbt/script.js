const questbook = {
    ques:[
        "What's Sheldon's last name?",
        "Which one of these is a real quote from Sheldon?",
        "Who got addicted to playing the Age of Conan video game?",
        "What's the name of Sheldon's favourite lullaby?",
        "The Big Bang Theory is about a group of geeky friends and their love for, interest, and work situations in this particular field.",
        "All of these geeky dudes make up the main cast of nerdy friends in the show, except for this one.",
        "Which of the geeky friends do not possess a doctoral degree?",
        "Sheldon and Leonard are friends with Raj Koothrappali who also works in Caltech. But where is he originally from?",
        "In what kind of engineering field is Howard Wolowitz practicing?",
        "Both Sheldon and Leonard are physicists, but of differing branches. Which kind of physicist is Sheldon?"
    ],

    ans: [
        "Hofstadter",
        "Wolowitz",
        "Cooper",
        "Bloom",
        "Bagoooti!",
        "Baffomple!",
        "Barghargagul!",
        "Bazinga!",
        "Penny",
        "Howard",
        "Stuart",
        "Amy",
        "Cuddle Cat",
        "Soft Cat",
        "Nice Dog",
        "Soft Kitty",
        "Science",
        "Art",
        "Sports",
        "Literature",
        "Sheldon Cooper",
        "Wil Wheaton",
        "Leonard Hofstadter",
        "Howard Wolowitz",
        "Sheldon Cooper",
        "Howard Wolowitz",
        "Leonard Hofstadter",
        "Raj Koothrappali",
        "Beijing, China",
        "New Delhi, India",
        "Hanoi, Vietnam",
        "Mexico, Mexico",
        "aerospace engineering",
        "mechanical engineering",
        "civil engineering",
        "theoretical engineering",
        "theoretical physicist",
        "experimental physicist",
        "astrophysicist",
        "biophysicist"
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