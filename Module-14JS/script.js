/*
1 Создать две кнопки в HTML: start и stop.

2 Реализовать функционал таймера отсчета старта
 печати через функцию-конструктор со свойсвами startTime,
  stopTime и interval. Добавить в prototype методы start
   и stop.
3 При нажатии на кнопку start, функция сохраняет момент
 нажатия в свойство startTime.
4 При нажатии на кнопку stop, функция сохраняет значение
 текущего момента времени в stopTime и записывает разницу 
 между startTime и stopTime в interval.
5 При нажатии на stop, значение interval выводится в консоль.*/

const startBtn = document.querySelector('.str');
const stopBtn = document.querySelector('.stp');

function Timer(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
}

Timer.prototype.start = function() {
    this.startTime = getCurrentTime();

}

Timer.prototype.stop = function() {
    this.stopTime = getCurrentTime();
    let timeArr = [];
    for (i = 0; i < this.startTime.length; i++) {
        timeArr.push(this.stopTime[i] - this.startTime[i])
    }
    this.interval = timeArr;
    console.log(`Интервал времени ${this.interval[0]} минут
     и ${this.interval[1]} секунд `);
}

let timeStart = new Timer();

startBtn.addEventListener('click', () => {
    timeStart.start()
});
stopBtn.addEventListener('click', () => {
    timeStart.stop()
})

function getCurrentTime() {
    let now = new Date();
    let startMin = now.getMinutes();
    let startSec = now.getSeconds();
    return [startMin, startSec];

}