const h1 = document.querySelector("h1");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

// Start
startBtn.addEventListener("click", () => {
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        displayTime();
    }, 1000);
});

// Stop
stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

// Reset
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    displayTime();
});

// Display Function
function displayTime() {
    let hr = String(hours).padStart(2, "0");
    let min = String(minutes).padStart(2, "0");
    let sec = String(seconds).padStart(2, "0");

    h1.textContent = `${hr}:${min}:${sec}`;
}