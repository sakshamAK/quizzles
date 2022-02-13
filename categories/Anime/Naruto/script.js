const questbook = {
    ques:[
        "Which of these is another word for ninja?",
        "What is Samehada?",
        "What's Naruto's mum's name?",
        "How many tails does Kurama have?",
        "What's the name of the leader of the toads?",
        "Which of these is NOT a type of jutsu? A jutsu is a fighting style by the way!",
        "How do you do a Naruto stroll?",
        "What team is Kakashi the leader of?",
        "Which Hokage sealed the nine-tailed fox inside Naruto?",
        "Who tricked Naruto into stealing a sacred scroll?"
    ],

    ans: [
        "Genjutsu",
        "Shinobi",
        "Arigato",
        "Gelato",
        "A giant possum",
        "A talking hat",
        "A mystical sword",
        "Naruto's dad",
        "Kushina",
        "Kurama",
        "Haruno",
        "Carol",
        "3",
        "7",
        "9",
        "1",
        "Wise Frog Master",
        "Great Toad Sage",
        "Giant Toad King",
        "Master Froggo",
        "Kama",
        "Sage Mode",
        "Amenosubaruboshinomikoto",
        "The 8 Paths of Discomfort",
        "You run really fast with your arms in front of you",
        "Like a naruto wander but a bit faster",
        "Walk at a normal speed with your arms out behind you",
        "There's no such thing as a naruto stroll!",
        "Team 7",
        "Twelve Guardian Ninja",
        "Taka",
        "Team Rocket",
        "fourth Hokage",
        "third Hokage",
        "second Hokage",
        "first Hokage",
        "Mizuki",
        "Sasuke",
        "Iruka",
        "Zabuza"
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