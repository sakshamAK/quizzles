const questbook = {
    ques:[
            "What comic book did Spider-Man first appear in",
            "Who was the first super-villain Spider-Man ever encountered?",
            "What super-villain kidnapped and murdered Peter Parker's girlfriend Gwen Stacy?",
            "Which character bullied Peter Parker in high school?",
            "When Spider-Man was first offered membership in The Avengers, he was required to catch what super-powered being as a test?",
            "What did Spider-Man bring home from the first \"Secret Wars\"?",
            " Who was the guest speaker at Peter Parker\'s high school graduation?",
            "Why did Stan Lee reject Jack Kirby as the original Spider-Man artist?",
            "What was the first Spider-Man spin-off series?",
            "What color is Mary Jane Watson's hair?"
    ],

    ans: [
        "MARVEL TALES #17",
        "AMAZING FANTASY #15",
        "TALES TO ASTONISH #8",
        "AMAZING SPIDER-MAN #1",
        "GREEN GOBLIN",
        "SUPERCHARGER",
        "TERRIBLE TINKERER",
        "DOCTOR OCTOPUS",
        "DOCTOR OCTOPUS",
        "ELECTRO",
        "GREEN GOBLIN",
        "THE RHINO",
        "BIFF TANNEN",
        "ROBBIE ROBERTSON",
        "J. JONAH JAMESON",
        "FLASH THOMPSON",
        "KANG THE CONQUEROR",
        "THE WASP",
        "DR. DOOM",
        "THE HULK",
        "NEW COSTUME",
        "A KEYCHAIN",
        "NEW GIRLFRIEND",
        "ALIEN FLU",
        "J. JONAH JAMESON",
        "CAPTAIN AMERICA",
        "DR. OTTO OCTAVIUS",
        "REED RICHARDS",
        "HE MISSED A DEADLINE",
        "HE WAS MAD ABOUT A BASEBALL GAME",
        "HE WANTED TOO MUCH MONEY",
        "HIS DRAWINGS WERE TOO HEROIC",
        "UNTOLD TALES OF SPIDER-MAN",
        "SENSATIONAL SPIDER-MAN",
        "MARVEL TEAM-UP",
        "SPECTACULAR SPIDER-MAN",
        "BLACK",
        "BLONDE",
        "BROWN",
        "RED"
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
