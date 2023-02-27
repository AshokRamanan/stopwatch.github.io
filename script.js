let hr = 00;
let min = 00;
let sec = 00;
let count = 00;
let interval = null;
let x = false;

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const milli = document.getElementById("milli");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Event listeners
startBtn.addEventListener('click',function() {
    x = true;
    start();
});
stopBtn.addEventListener('click',function() {
    x = false;
});
resetBtn.addEventListener('click',function() {
    x = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    milli.innerText = '00';
    second.innerText = '00';
    minute.innerText = '00';
    hour.innerText = '00';
});
//startBtn.onclick = start;

function timer() {
    if (x) {
        count += 1;
        if (count == 100) {
            sec += 1;
            count = 0;
        }
        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (min == 60) {
            hr += 1;
            min = 0;
        }

        let countStr = count;
        let secStr = sec;
        let minStr = min;
        let hrStr = hr;

        if (countStr < 10) {
            countStr = '0' + countStr;
        }
        if (secStr < 10) {
            secStr = '0' + secStr;
        }
        if (minStr < 10) {
            minStr = '0' + minStr;
        }
        if (hrStr < 10) {
            hrStr = '0' + hrStr;
        }
        

        milli.innerText = countStr;
        second.innerText = secStr;
        minute.innerText = minStr;
        hour.innerText = hrStr;
    }
}

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer,10)
}
