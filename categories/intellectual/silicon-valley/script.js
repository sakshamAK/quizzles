const questbook = {
    ques:[
        "What is Pied Piper?",
        "Gavin Belson originally offered how much to buy Pied Piper?",
        "At TechCrunch Disrupt, Jared was on what drug?",
        "What bank chain was Carver notorious for hacking in the past?",
        "How did Erlich originally come to own 10% of Pied Piper?",
        "People often incorrectly believe Jared has what type of health issue?",
        "Gilfoyle was an undocumented immigrant from what country?",
        "Where did Richard first meet Peter Gregory?",
        "Gilfoyle subscribes to what religion?",
        "Who was cut from the original Pied Piper Cap Table?"],

    ans: [
        "A lossless compression software.",
        "A scary story.",
        "A woman.",
        "A song.",
        "$1,000,000",
        "$600,000",
        "$25,000,000",
        "$15,000,000",
        "Weed",
        "Adderall",
        "Caffeine",
        "Opiates",
        "1st Source Bank",
        "Bank of America",
        "Standard Bank",
        "Chase Bank",
        "Erlich came up with the idea for Pied Piper.",
        "In exchange for rent-free lodging at Erlich's incubator, Richard agreed to give him 10% of Pied Piper.",
        "He tricked Richard into giving it to him.",
        "He bought it outright.",
        "A wasting disease.",
        "An eating disorder.",
        "A thyroid disorder.",
        "A substance use disorder.",
        "Germany",
        "Poland",
        "Canada",
        "Albania",
        "At Hooli.",
        "At a coffee shop.",
        "At a tech start-up competition.",
        "Outside a TED talk.",
        "Christianity.",
        "Satanism.",
        "He's Agnostic.",
        "Scientology.",
        "Big Head",
        "Dinesh",
        "Gilfoyle",
        "Jared"
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