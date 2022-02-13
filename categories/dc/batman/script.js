const questbook = {
    ques:[
        "What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
        "What were the names of Bruce Wayne's parents?",
        "Who is credited with creating Batman?",
        "What Batman villain formerly worked as a zoologist?",
        "What year was the character of Robin first introduced?",
        "In Detective Comics #267, a magical Kobold from another dimension decides to help Batman fight crime--what is his name?",
        "The original Batgirl was related to what familiar Batman character?",
        "Which of these Bat-villains was introduced first?",
        "What was Alfred the butler's original family name?",
        "What was Bat-hound's name?"
    ],
    
    ans: [
        "BANE",
        "RA'S AL GHUL",
        "JOKER",
        "KILLER CROC",
        "THOMAS & MARTHA",
        "GEORGE & ELAINE",
        "JAMES & ELIZABETH",
        "WAYNE & ALICE",
        "JACK KIRBY",
        "JOE SHUSTER",
        "BOB KANE",
        "JERRY SIEGEL",
        "THE PENGUIN",
        "POISON IVY",
        "MANBAT",
        "KILLER CROC",
        "1960",
        "1940",
        "1950",
        "1970",
        "MARTIAN MANHUNTER",
        "BAT-MITE",
        "BAT-DWARF",
        "MR. MXYZTPLK",
        "THE JOKER",
        "ALFRED",
        "BATWOMAN",
        "COMMISSIONER GORDON",
        "CATWOMAN",
        "MR. FREEZE",
        "THE PENGUIN",
        "THE RIDDLER",
        "CHATSWORTH",
        "PENNYWORTH",
        "BEAGLE",
        "WINDHAM",
        "CHAMP",
        "BURT",
        "LUCKY",
        "ACE"
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


