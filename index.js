let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0

function addOnePointHome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function addTwoPointHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function addThreePointHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function clearHome() {
    scoreHome = 0
    scoreHomeEl.textContent = scoreHome
}


function addOnePointGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function addTwoPointGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function addThreePointGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

function clearGuest() {
    scoreGuest = 0
    scoreGuestEl.textContent = scoreGuest
}



let quarterEl = document.getElementById("quarter-count")
let quarterCount = 1

function nextQuarter() {
    quarterCount += 1
    quarterEl.textContent = quarterCount
}

function clearQuarter() {
    quarterCount = 1
    quarterEl.textContent = quarterCount
}




