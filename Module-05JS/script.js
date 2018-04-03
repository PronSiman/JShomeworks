const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

const enAlphabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./';
const ruAlphabet = 'йцукенгшщзхъфывапролджэячсмитьбю.';
const uaAlphabet = 'йцукенгшщзхїфівапролджєячсмитьбю.';

const addKeyboardLayout = (alphabetString, firstSeparator, secondSeparator) => {
    const alphabetArray = alphabetString.split('');
    const startSecondRow = alphabetArray.indexOf(firstSeparator);
    const startThirdRow = alphabetArray.indexOf(secondSeparator);
    const keyboardArray = [alphabetArray.slice(0, startSecondRow), alphabetArray.slice(startSecondRow, startThirdRow), alphabetArray.slice(startThirdRow)];
    return keyboardArray;
}

const enAlphabetArray = addKeyboardLayout(enAlphabet, "a", "z");
const ruAlphabetArray = addKeyboardLayout(ruAlphabet, "ф", "я");
const uaAlphabetArray = addKeyboardLayout(uaAlphabet, "ф", "я");
const alphabetArrays = [enAlphabetArray, ruAlphabetArray, uaAlphabetArray];

function alphebetToKeybord(alphabetArr, language) {
    let i = 0;
    for (let key in keyboard.layouts[language]) {
        keyboard.layouts[language][key] = alphabetArr[i];
        i++;
    }
}

alphebetToKeybord(enAlphabetArray, keyboard.langs[0]);
alphebetToKeybord(ruAlphabetArray, keyboard.langs[1]);
alphebetToKeybord(uaAlphabetArray, keyboard.langs[2]);

function getLangFromUser() {
    while (true) {
        let lang = prompt(`Выбери язык: введите число соотвествующее языку -  en-0, ru-1, ua-2`);
        if (lang === null)
            return;
        if (Number.isInteger(+lang) && lang >= 0 && lang <= 2) {
            keyboard.currentLang = keyboard.langs[lang];
            break;
        }
        alert(`Введен недоступный язык, попробуйте снова`);
    }
}
getLangFromUser();

function getRandCharInAlph(callback) {
    const keybordRowsArray = Object.values(keyboard.layouts[keyboard.currentLang]);
    const randomRowIndex = callback(keybordRowsArray);
    const randLetterIndex = callback(keybordRowsArray[randomRowIndex]);

}

getRandCharInAlph(randomIndex);

function randomIndex(index) {
    return randInd = Math.floor(Math.random() * index.length);
}