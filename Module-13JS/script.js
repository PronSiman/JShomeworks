const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

let validateStatus = {};

submitBtn.addEventListener("click", validate);

function validate(evt) {
    evt.preventDefault();
    // inputs
    let firstInput = firstName.value;
    let lastInput = lastName.value;
    let telInput = tel.value;

    let chackingName = /^[a-zа-яё]{1,}(?: [a-zа-яё]{1,}){0,2}?$/i;
    let chackingSureName = /^[a-zа-яё_-]{1,}(?: [a-zа-яё]{1,})?$/i;
    let chakingTel = /^\+?(38)?0{1}[1-9]{1}[0-9]{8}$/;
    validateStatus.firstNameStatus = chackingName.test(firstInput);
    validateStatus.lastNameStatus = chackingSureName.test(lastInput);
    validateStatus.telStatus = chakingTel.test(telInput);
    showResults(validateStatus);
}

function showResults(results) {
    for (let key in results) {
        if (results[key]) {
            resultsList.innerHTML += '<li class ="success">SUCCESS: ' + key + ' passed validation </li>';
        } else resultsList.innerHTML += '<li class ="error">ERROR: ' + key + ' failed validation </li>';
    }
}