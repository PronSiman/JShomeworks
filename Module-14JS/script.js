const startBtn = document.querySelector('.str');
const stopBtn = document.querySelector('.stp');


function Timer(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
}

Timer.prototype.start = function() {
    this.startTime = new Date();

}

Timer.prototype.stop = function() {
    this.stopTime = new Date();
    this.interval = this.stopTime - this.startTime;
    console.log(`interval : ${this.interval} ms`)

}

let timeStart = new Timer(0, 0, 0);

startBtn.addEventListener('click', () => {
    timeStart.start()
});
stopBtn.addEventListener('click', () => {
    timeStart.stop()
})