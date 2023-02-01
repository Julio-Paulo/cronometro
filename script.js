let hour = 00;
let minute = 0;
let second = 0;
let millesecond = 0;

let clock;

function startTimer() {
    clock = setInterval(() => {timer();}, 10)
}

function stopTimer() {
    clearInterval(clock)
}

function restartTimer() {
    clearInterval(clock)
    hour = 00;
    minute = 0;
    second = 0;
    millesecond = 0;
    document.querySelector('.clock').innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}:${fixZero(fixTwoZero(millesecond))}`
}

function timer() {
    if((millesecond += 10) == 1000) {
        millesecond = 0;
        second++;
    }
    if(second == 60) {
        second = 0
        minute++
    }
    if(minute == 60) {
        minute = 0;
        hour++;
    }
    document.querySelector('.clock').innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}:${fixZero(fixTwoZero(millesecond))}`
}

function fixZero(time) {return time < 10 ? `0${time}` : time}
function fixTwoZero(time) {return time < 100 ? `0${time}` : time}