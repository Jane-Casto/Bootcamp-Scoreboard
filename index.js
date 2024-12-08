let homeScore = 0
let homeScoreEl = document.getElementById("home-score")

let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")


function home1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    console.log("Home score = ", homeScore)
}

function home2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    console.log("Home score = ", homeScore)
}

function home3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    console.log("Home score = ", homeScore)
}

// Guest Score Buttons 

function guest1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    console.log("Home score = ", guestScore)
}

function guest2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    console.log("Home score = ", guestScore)
}

function guest3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    console.log("Home score = ", guestScore)
}
