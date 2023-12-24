const prompt = require("prompt-sync")();

let WelcomePrompt = "Welcome to the Quiz "
let points = 0;
const NumberOfQuestions = 3;
const Name = prompt("Enter your Nickname: ")


console.log(WelcomePrompt + Name);

const question1 = prompt("What is the brain of the computer? : ");
const CorrectAns1 = "CPU"

if(question1.toUpperCase() === CorrectAns1) {
    console.log("You got it right!");
    points++;
} else {
    console.log("Incorrect")
}

//* ques 2

const question2 = prompt("What was the first computer mouse made of? : ");
const CorrectAns2 = "wood"

if(question2.toLowerCase() === CorrectAns2) {
    console.log("You got it right!");
    points++;
} else {
    console.log("Incorrect")
}

//* ques 3

const question3 = prompt("Bonus Question - Who invented computer? :");
const CorrectAns3 = "chris"

if(question3.toLowerCase() === CorrectAns3) {
    console.log("You got it right!");
    points+2;
} else {
    console.log("Incorrect")
}

let FinalScore= Math.round((points/NumberOfQuestions) * 100);
console.log("Congratulation you got: " + FinalScore.toString() + "%");