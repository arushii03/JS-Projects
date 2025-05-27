"use strict"

//* GAME LOGIC START
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let chances = 20;
let highScore = 0;
document.querySelector(".secretNumber").textContent = randomNumber;
document.querySelector(".chances").textContent = chances;

const displayMessage = (message) => {
    document.querySelector(".status").textContent = message;
}

//* Handling Click Events

// function call yahan pe EventListener perform kar raha hai
document.querySelector(".check").addEventListener("click", function () {
    // console.log("button clicked")
    const guess = Number(document.querySelector(".input").value);
    // console.log(guess, randomNumber);

    if (!guess) {
        // document.querySelector(".status").textContent = " 🔴 No Number! ";
        displayMessage("🔴 No Number!");
    } else if (guess === randomNumber) {
        // document.querySelector(".status").textContent = " 🏆 Correct Number ";
        displayMessage("🏆 Correct Number");
        document.querySelector('body').style.backgroundColor = "#60b347"

        if (chances > highscore) {
            highScore = chances
            document.querySelector(".score").textContent = highScore; 
        }
        

    } else if (guess != randomNumber) {
        if (chances > 1) {
            chances--;
            document.querySelector(".chances").textContent = chances;
            displayMessage(guess > randomNumber ? "Too high!" : "Too low");
        } else {
            chances = 0;
            document.querySelector(".chances").textContent = chances;
            displayMessage("You lost the game 😞");
            document.querySelector('body').style.backgroundColor = "#ff4949"
        }
        
    } 

});


document.querySelector(".restart").addEventListener("click", function(){
    chances = 20; 
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".status").textContent = "Game Status...";

    document.querySelector(".chances").textContent = chances;
    document.querySelector(".secretNumber").textContent = randomNumber;
    document.querySelector(".input").value = "";
    document.querySelector('body').style.backgroundColor = "#222";
})