const questbook = {
    ques:[
        "Chandler and Joey had two pets. What were they called?",
        "Chandler and Ross were a band while they were at college. Can you remember the band\'s name?",
        "Who was the youngest person in the Friends gang?",
        "Apart from untidiness, what annoys Monica the most?",
        "Ross is allergic to which kind of fruit?",
        "Monica dated a millionaire for a while. What was his name?",
        "Phoebe has a twin sister. What\'s her name?",
        "How many times has Ross been married?",
        "What was the name of Joey\'s childhood imaginary friend?",
        "In which city is Friends set?"],

    ans: ["Don and Ivana", 
        "Brian and Larry", 
        "Walter and Sergio", 
        "Chick Jr. and Duck Jr.",
        "Flock of Birds",
        "Wyld Stallyns",
        "Way, No Way",
        "Mosh Bros",
        "Rachel",  
        "Joey",
        "Phoebe",
        "Chandler",
        "Cheesy garlic bread",
        "Microwave popcorn",
        "Canned soup",
        "Animals dressed like humans",
        "Lemon",
        "Apple",
        "Kiwi",
        "Pomegranate",
        "Paul Becker",
        "Jake Becker",
        "e Becker",
        "Boris Becker",
        "Scarlett",
        "Ursula",
        "Sharon",
        "Rita",
        "Just the once",
        "Twice!",
        "Three times!",
        "Even the actor David Schwimmer has lost count!",
        "Mordecai",
        "Murdoch",
        "Maurice",
        "Monty",
        "Los Angeles",
        "New York City",
        "Miami",
        "Seattle"]
}

const questions = document.querySelectorAll(".ques");
const answers = document.querySelectorAll("label")
Object.values(questions).map((item, idx) => {
    item.innerText = questbook.ques[idx]
})
Object.values(answers).map((item, idx) => {
    item.innerText = questbook.ans[idx]
})
