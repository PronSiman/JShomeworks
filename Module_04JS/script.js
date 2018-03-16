const alphabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./'

const keyboard = addKeyboardLayout(alphabet);

function addKeyboardLayout(string) {
    const keyboardArr = string.split('');
    const keyboardRows = [keyboardArr.slice(0, keyboardArr.indexOf("a")), keyboardArr.slice(keyboardArr.indexOf("a"), keyboardArr.indexOf("z")), keyboardArr.slice(keyboardArr.indexOf("z"))];

    return keyboardRows;
}





function getRandCharInRow(numberString) {

    if (numberString <= 2 && numberString >= 0) {

        const random = Math.floor(Math.random() * keyboard[numberString].length);
        alert(`Случайный символ из строки ${numberString+1}, это - ${keyboard[numberString][random] } `);
    } else {
        alert('Введите число от 1 до 3')
        getRandCharInRow(+prompt('Введите номер строки на клавиатуре - число от  1 до 3') - 1);

    }




}

getRandCharInRow(+prompt('Введите номер строки на клавиатуре - число от  1 до 3') - 1);


function getRandCharInAlph(keyboard) {

    let randomRow = Math.floor(Math.random() * keyboard.length);
    let randomLetterIndex = Math.floor(Math.random() * keyboard[randomRow].length);
    let randomLetter = keyboard[randomRow][randomLetterIndex];

    return randomLetter;
}

alert(`Случайный символ клавиатурных строк это  - "${getRandCharInAlph(keyboard)}"`);