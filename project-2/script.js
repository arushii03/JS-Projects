"use strict"

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal")

//Adding click event using for loop
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", function () {
        // console.log(modal.classList);
        modal.classList.remove("hidden");
        // console.log(modal.classList);
        overlay.classList.remove("hidden");
    })
}

//* Adding click event to each button separately
// btnsOpenModal[0].addEventListener("click", function () {
//     console.log("Click 1");
// })

// btnsOpenModal[1].addEventListener("click", function () {
//     console.log("Click 2");
// })

// btnsOpenModal[2].addEventListener("click", function () {
//     console.log("Click 3");
// })

btnCloseModal.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})

overlay.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})

document.addEventListener("keydown", function (e) {
    //console.log(e)
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        console.log("Close modal");
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
})