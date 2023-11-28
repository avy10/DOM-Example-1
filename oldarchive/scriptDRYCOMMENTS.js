'use strict';

const userName = prompt("Enter your Name.");
document.querySelector("#un").textContent = userName;
const updatingMessageClass = (value) => {
    document.querySelector(".message").textContent = value;
};

const updatingScores = (valueSuper, value) => {
    updatingMessageClass(valueSuper);
    document.querySelector(".score").textContent = value;
}

const updatingMiscellaneousFields = (valNumber, valAgain, valGuess) => {
    document.querySelector(".number").textContent = valNumber;
    document.querySelector(".again").textContent = valAgain;
    document.querySelector(".guess").value = valGuess;
};

const updatingHighScore = (value) => {
    document.querySelector(".highscore").textContent = value;
};
const reset = function (){
    score = 20;
    number = Math.trunc(Math.random()*20)+1;
    // document.querySelector(".number").textContent = "?";
    // document.querySelector(".again").textContent = "Again!";
    // document.querySelector(".guess").value = '';
    updatingMiscellaneousFields("?", "Again!", "");
    // document.querySelector(".message").textContent ="Start guessing..."
    // updatingMessageClass("Start guessing...");
    updatingScores("Start guessing...", score);
    

  document.querySelector('body').style.backgroundColor = 'rebeccapurple';
  document.querySelector('.number').style.width = '15rem';
    // document.querySelector(".score").textContent = 20;
    // document.querySelector(".highscore").textContent = highScore;
    updatingHighScore(highScore);
    console.log("ORIGINAL NUMBER", number);
}
const gameLogic = function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess);
    console.log(typeof(guess), guess, "original num", number);
    
    if(!guess) {
        // document.querySelector(".message").textContent = "!!No Number!!";
        updatingMessageClass("!!No Number!!");
        
    } else if(guess === number) {
        // document.querySelector(".message").textContent = "YAY!! Correct guess. 😍😍";
        // updatingMessageClass("YAY!! Correct guess. 😍😍");
        score--;
        highScore = score;
        // document.querySelector(".score").textContent = score;
        updatingScores("Start guessing...", score);
        // document.querySelector(".highscore").textContent = highScore;
        updatingHighScore(highScore);
        // document.querySelector(".number").textContent = guess;
        // document.querySelector(".again").textContent = "Again??";
        // document.querySelector(".guess").value = "";
        updatingMiscellaneousFields(guess, "Again??", "");

        document.querySelector("body").style.backgroundColor = "#60b347"; 
        document.querySelector(".number").style.width = "25rem";
        document.querySelector(".number").style.height = "20rem";
        document.querySelector(".number").style.fontSize = "10rem";
        return;
    } else if(guess > number) {
        // document.querySelector(".message").textContent = "Too High!!📈📈";
        // updatingMessageClass("Too High!!📈📈");
        score--;

        // document.querySelector(".score").textContent = score;
        updatingScores("Too High!!📈📈", score);
    } else if(guess < number) {
        // document.querySelector(".message").textContent = "Too Low!!📉📉";
        // updatingMessageClass("Too Low!!📉📉");
        score--;
        // document.querySelector(".score").textContent = score;
        updatingScores("Too Low!!📉📉", score)
    }

    if(score === 0) {
        window.alert("Sorry you lost. All attempts exhausted. Restarting game.");
        reset();
        return;
    }
}

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
console.log("ORIGINAL NUMBER", number);
// document.querySelector(".guess").value = 19;



document.querySelector(".check").addEventListener("click", function () {
    // const guess = document.querySelector(".guess").value;
    // console.log(guess);
    gameLogic();
});
document.querySelector(".again").addEventListener("click", function(){
    reset();
});
