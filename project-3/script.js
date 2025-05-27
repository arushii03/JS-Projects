"use strict"

// Selecting elements
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const current0El = document.querySelector("#current-0");
const current1El = document.querySelector("#current-1");

const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const btnRestart = document.querySelector(".restart");



//* Variables
let totalScore, currentScore, activePlayer, isGameRunning;

function init() {
    totalScore = [0,0];
    currentScore = 0; //initialise with 0 because if we keep a number in an undefined datatype then its value is displayed as NaN (Not a number)
    activePlayer = 0; // 0 -> 1st player, 1 -> 2nd player
    isGameRunning = true;

    diceEl.classList.add("hidden");
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.remove("player-winner");
    player1El.classList.remove("player-winner");
    player0El.classList.add("player-active");
    player1El.classList.remove("player-active");
}

init();

//* Switch Player functionality
function switchPlayer() {
    currentScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player-active");
    player1El.classList.toggle("player-active");
}

//* Handle roll dice button
btnRoll.addEventListener("click", () => {
    if (isGameRunning) {
        //Generate random dice roll
        const dice = Math.trunc(Math.random() * 6 + 1);
        console.log(dice);

        // Display correct dice image

        // Longer approach
        // if (dice == 1)
        //     diceEl.src = "images/dice-1.svg"
        // else if (dice == 2)
        //     diceEl.src = "images/dice-2.svg"
        // else if (dice == 3)
        //     diceEl.src = "images/dice-3.svg"
        // else if (dice == 4)
        //     diceEl.src = "images/dice-4.svg"
        // else if (dice == 5)
        //     diceEl.src = "images/dice-5.svg"
        // else if (dice == 6)
        //     diceEl.src = "images/dice-6.svg"

        // Easier and shorter approach
        diceEl.classList.remove("hidden");
        diceEl.src = `images/dice-${dice}.svg`;

        if (dice != 1) {
            currentScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

//* Handle hold button
btnHold.addEventListener("click" , () => {
    if (isGameRunning) {
        totalScore[activePlayer] += currentScore;
        document.querySelector(`#score-${activePlayer}`).textContent = totalScore[activePlayer];
    
    
        // update later
        if (totalScore[activePlayer] >= 20) {
            diceEl.classList.add("hidden");
            document.querySelector(`.player-${activePlayer}`).classList.remove("player-active");
            document.querySelector(`.player-${activePlayer}`).classList.add("player-winner");
            isGameRunning = false;
        } else {
            switchPlayer();
        }
    }
})

//* Handle Restart Button
btnRestart.addEventListener("click" , init);

