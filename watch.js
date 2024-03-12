document.addEventListener('DOMContentLoaded', function() {
let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');

let hour = 0;
let second = 0;
let minute = 0;
let count = 0;
let time = false; // Define 'time' as a global variable

startbtn.addEventListener('click', function() {
    time = true;
    stopwatch();
});

stopbtn.addEventListener('click', function() {
    time = false;
});

resetbtn.addEventListener('click', function() {
    time = false;
    hour = 0;
    second = 0;
    minute = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopwatch() {
    if (time) {
        count++;

        if (count == 100) {
            second++;
            count = "0";
        }
        if (second == 60) {
            minute++;
            second = "0";
        }

        if (minute == 60) {
            hour++;
            minute = "0";
        }

        let hrstring = hour;
        let minstring = minute;
        let secstring = second;
        let countstring = count;

        if (hour < 10) {
            hrstring = "0" + hrstring;
        }
        if (minute < 10) {
            minstring = "0" + minstring;
        }

        if (second < 10) {
            secstring = "0" + secstring;
        }

        if (count < 10) {
            countstring = "0" + countstring;
        }

        document.getElementById('hr').innerHTML = hrstring;
        document.getElementById('min').innerHTML = minstring;
        document.getElementById('sec').innerHTML = secstring;
        document.getElementById('count').innerHTML = countstring;
        setTimeout(stopwatch, 10);
    }
}
});