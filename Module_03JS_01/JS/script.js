const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const arr = alphabet.split('');
const keyboard = [];

const firstKeyboardLine = arr.slice(0, arr.indexOf('a'));
const secondKeyboardLine = arr.slice(arr.indexOf('a'), arr.indexOf('z'));
const thirdKeyboardLine = arr.slice(arr.indexOf('z'));

const hello = secondKeyboardLine[5] + firstKeyboardLine[2] + secondKeyboardLine[8] + secondKeyboardLine[8] + firstKeyboardLine[8];
const js = secondKeyboardLine[6] + secondKeyboardLine[0] + thirdKeyboardLine[3] + secondKeyboardLine[0] + secondKeyboardLine[1] + thirdKeyboardLine[2] + firstKeyboardLine[3] + firstKeyboardLine[7] + firstKeyboardLine[9] + firstKeyboardLine[4];
const trainer = firstKeyboardLine[4] + firstKeyboardLine[3] + secondKeyboardLine[0] + firstKeyboardLine[7] + thirdKeyboardLine[5] + firstKeyboardLine[2] + firstKeyboardLine[3];

console.log(hello);
console.log(js);
console.log(trainer);