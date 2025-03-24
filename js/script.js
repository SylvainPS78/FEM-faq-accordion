const questionTexts = document.querySelectorAll(".question");
const expandButtons = document.querySelectorAll(".expand-button");
const buttonIcons = document.querySelectorAll(".button-icon");
const answers = document.querySelectorAll(".answer");
const pattern = document.getElementById("pattern");

function toggleAnswer(element,button) {
    const controlledAnswerId = button.getAttribute("aria-controls");
    const controlledAnswer = document.getElementById(controlledAnswerId);
    const buttonIcon = button.querySelector("img");

    if (controlledAnswer) {
        controlledAnswer.classList.toggle("hidden");
        if (controlledAnswer.classList.contains("hidden")) {
            button.setAttribute("aria-expanded","false");
            buttonIcon.src = "./assets/images/icon-plus.svg";
            buttonIcon.alt = ""
        }
        else {
            button.setAttribute("aria-expanded","true");
            buttonIcon.src = "./assets/images/icon-minus.svg";
            buttonIcon.alt = ""
        }
    }
}

function updatePattern () {
    if (window.innerWidth > 750) {
        pattern.src = "./assets/images/background-pattern-desktop.svg";
    }
    else {
        pattern.src = "./assets/images/background-pattern-mobile.svg";
    }
}

updatePattern();

window.addEventListener("resize", updatePattern);

expandButtons.forEach((button) => {
   button.addEventListener("click", ()=> {
    toggleAnswer(null,button);
})
})

questionTexts.forEach((question, index) => {
    question.addEventListener("click", ()=> {
        toggleAnswer(question, expandButtons[index])
    })
})

