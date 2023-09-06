const inputEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

function scaleText() { 
    const inputValue = inputEl.value;
    textEl.style.fontSize = `${inputValue}px`;
}

scaleText();

inputEl.addEventListener("input", scaleText);