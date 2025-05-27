"use strict";

//* DATA
const account1 = {
    owner: "Rahul Kumar",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 100],
    interestRate: 7,
    pin: 1111,
};

const account2 = {
    owner: "Vicky Singh",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 6,
    pin: 2222,
};

const account3 = {
    owner: "Mohit Sharma",
    movements: [200, -200, 340, -20, 50, 400, -460],
    interestRate: 6.7,
    pin: 3333,
};

const account4 = {
    owner: "Raj Verma",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 8,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//* Elements 
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".balance-date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".form-btn-sort");

const inputLoginUsername = document.querySelector(".login-input-user");
const inputLoginPin = document.querySelector(".login-input-pin");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoan = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-user");
const inputClosePin = document.querySelector(".form-input-pin");

//* Function

const displayMovement = function (movements) {
    containerMovements.innerHTML = "";
    movements.forEach((mov, i) => {
        const type = mov > 0 ? "deposit" : "withdraw";

        const movRow = `
        <div class="movements-row">
            <div class="movements-type movements-type-${type}">${i + 1} ${type}</div>
            <div class="movements-date">3 days ago</div>
            <div class="movements-value">${mov}₹</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML("afterbegin", movRow);
    });
};


const calcDisplayBalance = function (acc) {
        const balance = acc.movements.reduce((acc, mov, i, arr) => {return acc + mov;
        }, 0);

        labelBalance.innerHTML = `${balance}₹`;
};
// calcDisplayBalance();


const calcDisplaySummary = function (acc) {
    const income = acc.movements
        .filter((el, i, arr) => el > 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumIn.textContent = `${income}₹`;

    const out = acc.movements
    .filter((el, i, arr) => el < 0)
    .reduce((acc, mov) => acc + mov, 0);

    labelSumOut.textContent = `${Math.abs(out)}₹`;

    const interest = acc.movements
    .filter((el) => el > 0)
    .map((el) => el * 0.07)
    .reduce((acc, mov) => acc + mov, 0);

    labelSumInterest.textContent = `${interest}₹`;
};
// calcDisplaySummary();

const createUsername = function () {
    accounts.forEach(function (acc) {
        acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join("");
    });
};

createUsername();

console.log(accounts);

// btn login
let currentAccount;

btnLogin.addEventListener("click", function(e){
    e.preventDefault();

    currentAccount = accounts.find(function(acc, index, arr){
        return acc.username == inputLoginUsername.value;
    });

    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)){
        containerApp.style.opacity = 100;

        displayMovement(currentAccount.movements);
        calcDisplayBalance(currentAccount);
        calcDisplaySummary(currentAccount);
    }
});