const questbook = {
    ques:[
        "The Tag is used To Give Heading To The Table.",
        "Function is Used To Parse a String To Int:",
        "Which Of The Dialog Box Display a Message And a Data Entry Field?",
        "Event is Used To Check An Empty Text Box:",
        "Method Prompt() Contain ........Number of Parameters.",
        "GetMonth() returns The Month as:",
        "If Button is clicked .......Event Handler is invoked.",
        "A Function Associated With An object is Called:",
        "JavaScript File Has An Extension of:",
        "IsNaN() Evaluates And Argument To Determine if Given Value:"
    ],
    
    ans: [
        "Head ",
        "Td ",
        "Th",
        "Caption",
        "Integer.Parse ",
        "Int.Parse ",
        "Parse.Int",
        "None",
        "Alert() ",
        "Prompt() ",
        "Confirm()",
        "Msg()",
        "Onclick() ",
        "OnFocus() ",
        "OnBlur()",
        "None",
        "One ",
        "Two ",
        "Three",
        "Zero",
        "Int ",
        "Float ",
        "Char",
        "String",
        "OnSubmit() ",
        "OnLoad() ",
        "IsPostBack()",
        "Onclick()",
        "Function ",
        "Method ",
        "Link",
        "None",
        ".Java ",
        ".Js ",
        ".javascript",
        ".xml",
        "Is Not a Null ",
        "Is Not a Number ",
        "Is Not a New Object",
        "None Of The Above"
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
