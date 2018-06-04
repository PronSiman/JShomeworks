const startBtn = document.querySelector('.strbtn');
const stopBtn = document.querySelector('.stpbtn');

let Timer = class Timer {
    constructor(startTime, stopTime, interval) {
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.interval = interval;
    }
    toConsole() {
        return `Start time : ${this.startTime}
        Stop time : ${this.stopTime}
        Interval : ${this.interval}`
    }
    start() {
        this.startTime = getCurrentTime();

    }
    stop() {
        this.stopTime = getCurrentTime();
        let timeArr = [];
        for (let i = 0; i < this.startTime.length; i++) {
            timeArr.push(this.stopTime[i] - this.startTime[i])
        }
        this.interval = timeArr;
    }
    getTime() {
        console.log(`Current interval : ${this.interval[0]} minutes & ${this.interval[1]} seconds`)

    }
    static timeToNY() {
        let currentDate = new Date;
        let nextNY = new Date(`Jan 1 ${currentDate.getFullYear()+1} 0:00:00`);
        let miliseconds = nextNY - currentDate;
        let remain = Math.ceil(miliseconds / 1000 / 60 / 60 / 24);
        console.log(`Дней до нового года ${remain}`);

    }
}

let timerOne = new Timer("15:30", "15:40", "10");
console.log(timerOne.toConsole());
let timerTwo = new Timer("17:01", "15:04", "3");
console.log(timerTwo.toConsole());

let stopwatch = new Timer();

startBtn.addEventListener('click', () => {
    stopwatch.start();
})
stopBtn.addEventListener('click', () => {
    stopwatch.stop();
    stopwatch.getTime();
})

function getCurrentTime() {
    let now = new Date();
    let startMin = now.getMinutes();
    let startSec = now.getSeconds();
    return [startMin, startSec];
}