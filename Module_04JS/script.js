const alphabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./'

function addKeyboardLayout(string) {
    const keyboardArr = string.split('');
    const keyboardRows = [keyboardArr.slice(0, keyboardArr.indexOf("a")), keyboardArr.slice(keyboardArr.indexOf("a"), keyboardArr.indexOf("z")), keyboardArr.slice(keyboardArr.indexOf("z"))];

    return keyboardRows;
}
const keyboard = addKeyboardLayout(alphabet);

let numberString;

do {
    numberString = +prompt(`Введите число от 1 до 3`) - 1;
    if (numberString <= 2 && numberString >= 0) {
        const randomLetterIndex = getRandCharInRow(numberString)
        alert(`Случайный символ из строки ${numberString+1}, это - ${keyboard[numberString][randomLetterIndex]} `);
    } else if (confirm('Введите число от 1 до 3'));
    else {
        break;
    }
} while (numberString > 2 || numberString < 0)

function getRandCharInRow(randomLetterIndex) {
    const randomIndex = Math.floor(Math.random() * keyboard[randomLetterIndex].length);
    return randomIndex;
}

function getRandCharInAlph(keyboard) {

    const randomRow = Math.floor(Math.random() * keyboard.length);
    const randomLetterIndex = getRandCharInRow(randomRow)
    const randomLetter = keyboard[randomRow][randomLetterIndex];
    return randomLetter;
}

alert(`Случайный символ клавиатурных строк это  - "${getRandCharInAlph(keyboard)}"`);







// прошлый код