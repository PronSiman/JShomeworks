const clockTimer = document.querySelector(".watchtxt");
const stopButton = document.querySelector(".stopbtn");
const resButton = document.querySelector(".resetbtn");
const form = document.querySelector(".letter-form");
const input = document.querySelector(".input");
const answer = document.querySelector(".answer");
const trueinput = document.querySelector(".trueinput");
const speedAnswer = document.querySelector(".speedanswer");
const bestTime = document.querySelector(".besttime");
const keyboard = '1234567890qwertyuiopasdfghjklzxcvbnm';
const keyboardArr = keyboard.split('');
let timer;
let sc = 0,
    mn = 0;
const lang = "qwerty";
let langArr = lang.split("");

function setTimer() {

    resButton.addEventListener("click", reseted)

    function countKPS(mn, sc) {

        let secondsValue = 60 * +mn + +sc;
        let dataFromStorage = +(localStorage.getItem('besttime'));
        if (secondsValue < dataFromStorage || dataFromStorage == 0) {
            localStorage.setItem('besttime', secondsValue);
            bestTime.textContent = `Новый рекорд скорости ${secondsValue} секунды`;

        } else(localStorage.setItem('besttime', secondsValue));

    }

    function reseted() {

        sc = 0;
        mn = 0;
        clearInterval(timer);
        clockTimer.textContent = `0${mn}:0${sc}`
        form.removeAttribute("started")
        answer.textContent = '';
        langArr = lang.split("");
        trueinput.textContent = '';
        input.value = '';
        fillClear();
    }

    function min(mn, sc) {
        if (mn <= 9) {
            mn = "0" + mn;
        } else(++mn)
        clockTimer.textContent = `${mn}:${sc}`
    }

    function sec() {
        if (sc >= 59) {
            sc = "0" + 0;
            ++mn;
        } else if (sc < 9) {
            sc = "0" + ++sc;
        } else(++sc)
        min(mn, sc)
    }

    function fillClear() {
        speedAnswer.textContent = '';
        bestTime.textContent = '';
    }

    window.addEventListener("keypress", onClick);

    function onClick(event) {
        event.preventDefault();
        let userPresed = String.fromCharCode(event.keyCode).toLowerCase();
        keyboardArr.forEach(el => {
            if (userPresed === el) {
                letterCheking(userPresed);
            }
        })
    }

    function letterCheking(userPresed) {
        fillClear();
        if (form.hasAttribute("started") == false) {
            timer = setInterval(sec, 1000);
            form.setAttribute("started", "started")
        }
        if (userPresed === langArr[0]) {
            answer.textContent = 'Верно';
            trueinput.textContent += userPresed;
            langArr.splice(0, 1);
            input.value += userPresed;

        } else {
            answer.textContent = 'НЕ верно';
        }
        if (langArr.length === 0) {

            speedAnswer.textContent = `Клавиши введены верно на ${mn} минуте и  ${sc} секунде`;
            countKPS(mn, sc);
            clearInterval(timer);
        }
    }




}
setTimer();