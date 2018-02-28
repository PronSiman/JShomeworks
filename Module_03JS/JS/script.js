// Используя даную строку с полным алфавитом, программно составить массив keyboard содержащий 3 других массива с буквами алфавита, 
//идентичные строкам на клавиатуре.

// Массив keyboard будет иметь такую струтуру: [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].

// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
// Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам, записать в переменные слова и вывести их в консоль:

// hello
// javascript
// trainer

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const arr = alphabet.split('');
const keyboard = [];
keyboard[0] = arr.slice(0, arr.indexOf('a'));
keyboard[1] = arr.slice(arr.indexOf('a'), arr.indexOf('z'));
keyboard[2] = arr.slice(arr.indexOf('z'));
const word = 'hello'; // сюда можем передать любое слово транслитом
const arrWord = word.split('');
var index = [];

for (i = 0; i < arrWord.length; i++) {
    for (j = 0; j < keyboard.length; j++) {
        for (k = 0; k < keyboard[j].length; k++) {
            if (arrWord[i] == keyboard[j][k]) {


                index.push(keyboard[j][k]);
                console.log(`Буква ${keyboard[j][k]} имеет индекс в масcиве на клавиатуре: ` + j + ' ' + k)




            }

        }

    }

}
console.log(index);
console.log(index.join(''));