"use strict";

// const score = document.querySelector(".score");
// const highscore = document.querySelector(".highscore");
// let message = document.querySelector(".message");
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const check = document.querySelector(".check");
let guess = document.querySelector("#guess");
let displayImage = document.querySelector(".displayImage");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// number.textContent = secretNumber;

let score = 20;
let highscore = 0;

// updates
// message function
let displayMessage = function (message){
    document.querySelector(".message").textContent = message;
};
// score function
let scoreupdate = function(score){
    document.querySelector(".score").textContent = score;
};

check.addEventListener("click", function(){
    console.log("you click me");
    let player = Number(guess.value);
    if(!player) {
        displayMessage("No number!");
    } else if (player === secretNumber){
        displayMessage("🏆Congratulations!");
        number.textContent = secretNumber;
        number.style.width = "8rem";
        guess.style.backgroundColor = "green";
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (player !== secretNumber) {
        if (score > 1) {
            displayMessage(player > secretNumber ? "📈Too high!": "📉Too low!");
            score--;
            scoreupdate(score);
        } else{
            displayMessage("📈Game over");
            scoreupdate(0);
            displayImage.setAttribute("src", "images/question4.jpg");
        }
    }
});

again.addEventListener("click", function(){
    console.log("again");
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    scoreupdate(score);
    displayMessage("Start guessing...");
    number.textContent = "?";
    // number.textContent = secretNumber;
    guess.value = "";
    number.style.width = "5rem";
    guess.style.backgroundColor = "transparent";
    displayImage.setAttribute("src", "images/question.webp");
});