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



const display = document.getElementById("timer-el")
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function timerStart() {
    if (!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function timerStop() {
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function timerReset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00";
}

function update() {
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${minutes}:${seconds}:${milliseconds}`
}