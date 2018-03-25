const alphabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./'

function addKeyboardLayout(string) {
    const keyboardArr = string.split('');
    const keyboardRows = [keyboardArr.slice(0, keyboardArr.indexOf("a")), keyboardArr.slice(keyboardArr.indexOf("a"), keyboardArr.indexOf("z")), keyboardArr.slice(keyboardArr.indexOf("z"))];
    return keyboardRows;
}

const keyboard = addKeyboardLayout(alphabet);



let numberString;
let rowIndex;


function getRandCharInRow(callback) {

    while (true) {
        numberString = prompt(`Введите целое число от 1 до 3`);
        if (numberString === null) {
            return;
        }
        numberString = +numberString;
        if (Number.isInteger(numberString) && numberString <= 3 && numberString >= 1) {
            rowIndex = numberString - 1;
            break;
        }
    }

    const randomLetterIndex = callback(keyboard[rowIndex]);
    console.log(`Случайный символ из строки ${numberString}, это - ${keyboard[rowIndex][randomLetterIndex] } `);
}
getRandCharInRow(randomIndex);


function getRandCharInAlph(callback) {
    const randomRoWIndex = callback(keyboard);
    const randomLetterIndex = callback(keyboard[randomRoWIndex]);
    return keyboard[randomRoWIndex][randomLetterIndex];
}
console.log(`Случайный символ клавиатурных строк это  - "${getRandCharInAlph(randomIndex)}"`);

function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}