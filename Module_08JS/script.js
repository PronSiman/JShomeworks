const allKeys = document.querySelectorAll(".keyboard__btn");
const lable = document.querySelector("label");
const slider = document.querySelector("#slideThree");
const audiokey = document.querySelectorAll(".sonidos");
const playSound = note => {

    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};
const sliderAtr = slider.hasAttribute("checked");

slider.setAttribute("onchange", "checkBox()");

function checkBox() {
    if (sliderAtr === true) {
        slider.removeAttribute("checked")
    } else if (sliderAtr === false) {
        slider.setAttribute("checked", "checked");
    }
}

function keyboardToSound() {

    window.addEventListener("keypress", onClick)

    function onClick(event) {

        let userString = String.fromCharCode(event.keyCode);
        if (userString === " ") {
            userString = "space"
        }

        allKeys.forEach(function(elem) {
            elem.classList.remove("keyboard__btn--active")
            if (elem.textContent === userString) {
                elem.classList.add("keyboard__btn--active")
            }
        })

        let currentButton = document.querySelector(".keyboard__btn--active");
        let noteFromUser = currentButton.getAttribute("data-note");
        if ((slider.hasAttribute("checked") === true)) { playSound(noteFromUser); }

    }
}
keyboardToSound();