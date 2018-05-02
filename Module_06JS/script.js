const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount: function() {
        while (true) {
            let usersCount = prompt(`Введите количество символов от  1 до ${this.chars.length}`);
            if (usersCount === null) return;
            if (this.checkPositiveInteger(usersCount) === true) return this.charCount = +usersCount;
        }
    },

    checkPositiveInteger: function(number) {
        return (Number.isInteger(+number) && number > 0 && number < this.chars.length);
    },
    task: [],

    createTask: function() {
        this.task = new Array(this.charCount);
        for (i = 0; i < this.task.length; i++) {
            this.task[i] = this.chars[Math.floor(Math.random() * this.chars.length)]
        }
    },
    userInput: '',
    userErrors: '',
    startTask: function() {
        this.userInput = prompt(`Повторите символы ${this.task}`);
        if (this.userInput === null) return;

        let tasrArr = this.task;
        let userInputArr = this.userInput;
        let mistakes = 0;
        tasrArr.forEach((elem, index) => {

            if (elem !== userInputArr[index]) mistakes++;
        })
        let extraCount = 0;
        if (this.task.length < this.userInput.length) {
            extraCount = this.userInput.length - this.task.length;
        }
        this.userErrors = mistakes + extraCount;
        if (this.userErrors == 0) {
            console.log(`Поздравляем ни единой ошибки`)
        } else(console.log(`Не верно количество ошибок -  ${this.userErrors}`))
    }
}

function run() {
    if (keyTrainer.setCharCount() === undefined) return;
    keyTrainer.createTask();
    if (keyTrainer.startTask() === undefined) return;

}

run();