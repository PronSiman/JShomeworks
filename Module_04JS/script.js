const alphabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./'

function addKeyboardLayout(n) {
    let keyboardArr = n.split('');
    let keyboardRows = [keyboardArr.slice(0, keyboardArr.indexOf("a")), keyboardArr.slice(keyboardArr.indexOf("a"), keyboardArr.indexOf("z")), keyboardArr.slice(keyboardArr.indexOf("z"))];

    return keyboardRows;
}


function getRandCharInRow(s) {
    let keyboard = addKeyboardLayout(alphabet);

    const number = +prompt('Введите номер строки на клавиатуре - число от  1 до 3');


    if (number <= 3 && number >= 1) {
        let random = Math.floor(Math.random() * keyboard[number - 1].length);
        alert(`Случайный символ из строки ${number}, это - ` + `"` + keyboard[number - 1][random] +
            `"`);
    } else {
        alert('Введите число от 1 до 3')

    }
}
getRandCharInRow();


function getRandCharInAlph() {
    let keyboard = addKeyboardLayout(alphabet);
    let randomRow = Math.floor(Math.random() * keyboard.length);
    let randomLetterPosition = Math.floor(Math.random() * keyboard[randomRow].length);
    let randomLetter = keyboard[randomRow][randomLetterPosition];
    return randomLetter;
}

alert(`Случайный символ клавиатурных строк это  - "${getRandCharInAlph()}"`);