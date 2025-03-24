const questionTexts = document.querySelectorAll(".question");
const expendButtons = document.querySelectorAll(".expend-button");
const buttonIcons = document.querySelectorAll(".button-icon");
const answers = document.querySelectorAll(".answer");

function toggleAnswer(element,button) {
    const controlledAnswerId = button.getAttribute("aria-controls");
    const controlledAnswer = document.getElementById(controlledAnswerId);
    const buttonIcon = button.querySelector("img");

    if (controlledAnswer) {
        controlledAnswer.classList.toggle("hidden");
        if (controlledAnswer.classList.contains("hidden")) {
            button.setAttribute("aria-expended","false");
            buttonIcon.src = "./assets/images/icon-plus.svg";
            buttonIcon.alt = ""
        }
        else {
            button.setAttribute("aria-expended","true");
            buttonIcon.src = "./assets/images/icon-minus.svg";
            buttonIcon.alt = ""
        }
    }
}

expendButtons.forEach((button) => {
   button.addEventListener("click", ()=> {
    toggleAnswer(null,button);
})
})

questionTexts.forEach((question, index) => {
    question.addEventListener("click", ()=> {
        toggleAnswer(question, expendButtons[index])
    })
})