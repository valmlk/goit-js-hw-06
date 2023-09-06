const inputEl = document.querySelector("#validation-input")
inputEl.addEventListener("blur", addClass)

function addClass() {
    const inputLength = Number(inputEl.getAttribute("data-length"));
    
    inputEl.value.trim().length === inputLength
        ? (inputEl.classList.remove('invalid'), inputEl.classList.add('valid'))
        : (inputEl.classList.remove('valid'), inputEl.classList.add('invalid'))
};