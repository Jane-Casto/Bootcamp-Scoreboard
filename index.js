let homeScore = 0
let homeScoreEl = document.getElementById("home-score")

let awayScore = 0
let awayScoreEl = document.getElementById("away-score")


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

function away1() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
    console.log("Home score = ", awayScore)
}

function away2() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
    console.log("Home score = ", awayScore)
}

function away3() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
    console.log("Home score = ", awayScore)
}
