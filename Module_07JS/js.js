const enAlphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function createLayout(alphabet) {

    const arr = alphabet.split('');
    const keyboard = [arr.slice(0, arr.indexOf("a")), arr.slice(arr.indexOf("a"), arr.indexOf("z")), arr.slice(arr.indexOf("z"))];

    const wrapper = document.querySelector(".wrapper");

    let rows = '';
    let buttons = '';
    for (i = 0; i < keyboard.length; i++) {
        for (k = 0; k < keyboard[i].length; k++) {
            buttons += `<button class="key-button">${keyboard[i][k]}</button>`
        }
        rows += `<div class="key-row">${buttons}</div>`;
        buttons = '';
    }

    wrapper.innerHTML = rows;
}

createLayout(enAlphabet);