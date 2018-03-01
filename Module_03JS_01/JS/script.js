const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const arr = alphabet.split('');


const firstKeyboardLine = arr.slice(0, arr.indexOf('a'));
const secondKeyboardLine = arr.slice(arr.indexOf('a'), arr.indexOf('z'));
const thirdKeyboardLine = arr.slice(arr.indexOf('z'));
const keyboard = [firstKeyboardLine, secondKeyboardLine, thirdKeyboardLine];


const hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
const js = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
const trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];

console.log(hello);
console.log(js);
console.log(trainer);