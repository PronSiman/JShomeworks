const enAlphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function createLayout(alphabet) {

    const arr = alphabet.split('');
    const keyboard = [arr.slice(0, arr.indexOf("a")), arr.slice(arr.indexOf("a"), arr.indexOf("z")), arr.slice(arr.indexOf("z"))];

    const row = document.querySelector(".row")

    let k = 0;
    keyboard.forEach(element => {
        let currentKeys = document.createElement('ul');
        currentKeys.classList.add('keys');
        row.appendChild(currentKeys);
        let i = 0;
        keyboard[k].forEach(element => {
            let currentLetter = document.createElement('li');
            currentLetter.classList.add("key-letter")
            currentLetter.textContent = keyboard[k][i];
            currentKeys.appendChild(currentLetter);
            i++;

        });
        k++;

    });


}

createLayout(enAlphabet);